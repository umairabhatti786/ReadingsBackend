const PostData = async (data) => {
  let result = await data.save();
  return result;
};
const UpdateOneById = async (data,id, body) => {
  let result = await data.findByIdAndUpdate(
    id,
    { $set: body },
    { new: true } // This option returns the updated document
  );
  return result;;
};

module.exports = {
  PostData,
  UpdateOneById,
};
