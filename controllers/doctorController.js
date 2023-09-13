const multer = require("multer");
const sharp = require("sharp");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const knex = require("../db/db");
const fs = require("fs/promises");
const {
  doctorGetSchema,
  doctorGetByIdSchema,
  doctorCreateSchema,
} = require("../models/doctors");
const { defaultLimit } = require("../config");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/img/doctors");
  },
  filename: (req, file, cb) => {
    if (!file) {
      cb(new AppError("Please upload an image", 400), false);
    }
    const ext = file.mimetype.split("/")[1];
    const name = `user-${req.params.id}-${Date.now()}.${ext}`;
    req.dest = name;
    cb(null, name);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
exports.isImage = catchAsync(async (req, res, next) => {
  if (req.file) return next();

  throw new AppError("File not Found", 400);
});
exports.uploadUserPhoto = upload.single("image");
exports.params = catchAsync(async (req, res, next) => {
  const result = doctorGetByIdSchema.validate(req.params.id);
  if (result.error) {
    throw new AppError(result.error.message, 400);
  }
  const doctors = await knex("doctors").where("id", result.value).first();
  if (!doctors) {
    throw new AppError("Doctor with id " + result.value + " not found", 404);
  }
  next();
});

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.params.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);

  next();
});

exports.getDoctors = catchAsync(async (req, res, next) => {
  const result = doctorGetSchema.validate(req.query);
  if (result.error) {
    throw new AppError(result.error.message, 400);
  }

  let doctors = knex("doctors");
  let doctors2 = knex("doctors");
  if (result.value.query) {
    doctors.where((table) => {
      table.orWhere("first_name", "like", `%${result.value.query}%`);
      table.orWhere("last_name", "like", `%${result.value.query}%`);
      table.orWhere("middle_name", "like", `%${result.value.query}%`);
    });
    doctors2.where((table) => {
      table.orWhere("first_name", "like", `%${result.value.query}%`);
      table.orWhere("last_name", "like", `%${result.value.query}%`);
      table.orWhere("middle_name", "like", `%${result.value.query}%`);
    });
  }
  if (!result.value.limit) {
    result.value.limit = defaultLimit;
  }
  if (!result.value.page) {
    result.value.page = 1;
  }
  doctors = doctors
    .limit(result.value.limit)
    .offset((result.value.page - 1) * result.value.limit);
  if (!result.value.orderBy) {
    result.value.orderBy = "desc";
  }
  if (!result.value.sortBy) {
    result.value.sortBy = "id";
  }
  doctors.select({
    "id":"id",
    "first_name":"first_name",
    "last_name":"last_name",
    "gender":"gender",
    "position":"position",
    "age":"age",
    "gender":"gender",
    "middle_name":"middle_name",
    "longitude":"longitude",
    "latitude":"latitude",
    "start_time":"start_time",
    "end_time":"end_time",
    "image":knex.raw('COALESCE("image", \'default.jpg\')')
});
  doctors = doctors.orderBy(result.value.sortBy, result.value.orderBy);
  doctors = await doctors;
  doctors2 = await doctors2.count("id as count").first();
  return res.status(200).json({
    status: 200,
    data: {
      doctors: doctors,
    },
    length: doctors2.count,
    totalPages: Math.ceil(+doctors2.count / result.value.limit),
    currentPage: result.value.page,
  });
});

exports.getDoctor = catchAsync(async (req, res, next) => {
  const result = doctorGetByIdSchema.validate(req.params.id);
  if (result.error) {
    throw new AppError(result.error.message, 400);
  }
  
  const doctors = await knex("doctors").where("id", result.value).select({
    "id":"id",
    "first_name":"first_name",
    "last_name":"last_name",
    "gender":"gender",
    "position":"position",
    "age":"age",
    "gender":"gender",
    "middle_name":"middle_name",
    "longitude":"longitude",
    "latitude":"latitude",
    "start_time":"start_time",
    "end_time":"end_time",
    "image":knex.raw('COALESCE("image", \'default.jpg\')'),
    "created_at":"created_at",
    "updated_at":"updated_at"
}).first();
  if (!doctors) {
    throw new AppError("Doctor with id " + result.value + " not found", 404);
  }
  return res.status(200).json({
    status: 200,
    data: {
      doctor: doctors,
    },
  });
});

exports.createDoctor = catchAsync(async (req, res, next) => {
  const result = doctorCreateSchema.validate(req.body);
  if (result.error) {
    throw new AppError(result.error.message, 400);
  }

  const doctors = await knex("doctors").insert(result.value).returning("id");
  return res.status(201).json({
    status: 201,
    data: {
      doctor: doctors[0],
    },
  });
});

exports.updateDoctor = catchAsync(async (req, res, next) => {
  const result1 = doctorGetByIdSchema.validate(req.params.id);
  if (result1.error) {
    throw new AppError(result1.error.message, 400);
  }

  const doctors1 = await knex("doctors").where("id", result1.value).first();
  if (!doctors1) {
    throw new AppError("Doctor with id " + result1.value + " not found", 404);
  }
  const result = doctorCreateSchema.validate(req.body);
  if (result.error) {
    throw new AppError(result.error.message, 400);
  }

  const doctors = await knex("doctors").update(result.value).returning("id");
  return res.status(203).json({
    status: 203,
    data: {
      doctor: doctors[0],
    },
  });
});

exports.uploadImage = catchAsync(async (req, res, next) => {
  if (!req.file) {
    throw new AppError("Please upload an image", 400);
  }
  const doctors = await knex("doctors").where("id", req.params.id).first();
  if (doctors.image) {
    await fs.unlink("./public/img/doctors/" + doctors.image);
  }
  await knex("doctors")
    .update({
      image: req.dest,
    })
    .where("id", req.params.id);

  return res.status(203).json({
    status: 203,
    data: {
      doctor: {
        image: req.dest,
      },
    },
  });
});
