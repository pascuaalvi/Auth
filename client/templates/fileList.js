Template.fileList.helpers({
  files: function () {
    return Files.find();
  },
  filesExist: function () {
    return Files.find().count() !== 0;
  },
});