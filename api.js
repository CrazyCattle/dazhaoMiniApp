const basicUrl = "https://stu.dazhao100.cn/api";

module.exports = {
  getIndexCRecommend: `${basicUrl}/recommendLesson`, // 首页课程推荐列表
  getCRecommend: `${basicUrl}/recommendLessonList?p=`, // 课程推荐列表
  getCClass: `${basicUrl}/getLessonClass`, // 课程一、二级分类
  getSClass: `${basicUrl}/classThreeLesson?class_id=`, // 二级分类下的课程数据
  getCollect: `${basicUrl}/lessonCollect?num=`, // 课程收藏
  getHistory: `${basicUrl}/lessonRecord?num=`, // 课程历史
  getPlayUrl: `${basicUrl}/lessonPlay?id=`, // 播放页面
  getNewCourse: `${basicUrl}/lesson?p=`, // 发现新课程（所有课程）
  collect: `${basicUrl}/collect`,// 收藏与取消收藏 stu_id，lesson_id
  loginIn: `${basicUrl}/UserLogin`, // 用户登录
  getAuthCode: `${basicUrl}/getAuthCode?mobile=`, // 获取短信验证码
  register: `${basicUrl}/register`, // 用户注册 mobilecode,student_truename,student_name,student_passwd,mobile
  banner: `${basicUrl}/banner`, // 首页banner图
  schoolInfo: `${basicUrl}/universityInfo`, // 高校logo，name
  resumeList: `${basicUrl}/ResumesList`, // 简历列表
  resumeBasicEdit: `${basicUrl}/ResumesBasicsEdit`, // 简历基本信息修改 resumes_id，student_id，img，title，truename，mobile，email，expectwork
};
