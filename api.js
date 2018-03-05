const basicUrl = "https://stu.dazhao100.cn/api";

module.exports = {
  getIndexCRecommend: `${basicUrl}/recommendLesson`, //首页课程推荐列表
  getCRecommend: `${basicUrl}/recommendLessonList?p=`, //课程推荐列表
  getCClass: `${basicUrl}/getLessonClass`, //课程一、二级分类
  getSClass: `${basicUrl}/classThreeLesson?class_id=`, //二级分类下的课程数据
  getCollect: `${basicUrl}/lessonCollect?num=`, //课程收藏
  getHistory: `${basicUrl}/lessonRecord?num=`, //课程历史
  getPlayUrl: `${basicUrl}/lessonPlay?id=`, //播放页面
  getNewCourse: `${basicUrl}/lesson?p=`, //发现新课程（所有课程）
  loginIn: `${basicUrl}/UserLogin`, // 登录
  banner: `${basicUrl}/banner`, //首页banner图
  schoolInfo: `${basicUrl}/universityInfo` //高校logo，name
};
