import { decode } from 'jsonwebtoken';
import Voucher from '../models/voucher';

export const create = async (req, res) => {
  try {
    const voucher = await new Voucher(req.body).save();
    res.json(voucher);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
export const list = async (req, res) => {
  try {
    const voucher = await Voucher.find({})
      .populate('userId')
      .populate('storeId');
    res.json(voucher);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const read = async (req, res) => {
  try {
    const voucher = await Voucher.findOne({ _id: req.params.id }).exec();
    res.json(voucher);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const voucher = await Voucher.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    res.json(voucher);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
export const update = async (req, res) => {
  const condition = { _id: req.params.id };
  const update = req.body;
  try {
    const voucher = await Voucher.findOneAndUpdate(condition, update).exec();
    res.json(voucher);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const search = async (req, res) => {
  const searchString = req.query.q ? req.query.q : '';

  const result = await Voucher.find({
    $text: { $search: searchString },
  }).exec();
  res.json(result);
};

export const getUserVoucher = async (req, res) => {
  try {
    const userId = decode(req.token)._id;
    const { storeId } = req.query;
    const voucher = await Voucher.find({ userId, storeId, isUsed: false })
      .populate('storeId')
      .exec();
    res.json(voucher);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
