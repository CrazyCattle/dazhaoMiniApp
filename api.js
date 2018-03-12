const basicUrl = "https://stu.dazhao100.cn/api";

module.exports = {
  wxAuthorization: `${basicUrl}/wxAuthorization`, // 获取openid
  getIndexCRecommend: `${basicUrl}/recommendLesson`, // 首页课程推荐列表
  getCRecommend: `${basicUrl}/recommendLessonList?p=`, // 课程推荐列表
  getCClass: `${basicUrl}/getLessonClass`, // 课程一、二级分类
  getSClass: `${basicUrl}/classThreeLesson?class_id=`, // 二级分类下的课程数据
  getCollect: `${basicUrl}/lessonCollect`, // 课程收藏
  getHistory: `${basicUrl}/lessonRecord`, // 课程历史
  getPlayUrl: `${basicUrl}/lessonPlay?id=`, // 播放页面
  getNewCourse: `${basicUrl}/lesson?p=`, // 发现新课程（所有课程）
  collect: `${basicUrl}/collect`,// 收藏与取消收藏 stu_id，lesson_id
  loginIn: `${basicUrl}/UserLogin`, // 用户登录
  getAuthCode: `${basicUrl}/getAuthCode?mobile=`, // 获取短信验证码
  register: `${basicUrl}/register`, // 用户注册 mobilecode,student_truename,student_name,student_passwd,mobile
  banner: `${basicUrl}/banner`, // 首页banner图
  schoolInfo: `${basicUrl}/universityInfo`, // 高校logo，name
  resumeList: `${basicUrl}/ResumesList`, // 简历列表
  delResume: `${basicUrl}/ResumesDel`, // 简历删除 resumes_id, stu_id
  getResumeOne: `${basicUrl}/ResumesOneList`, // 获取单个简历的信息
  resumeBasicEdit: `${basicUrl}/ResumesBasicsEdit`, // 简历基本信息修改 resumes_id，student_id，img，title，truename，mobile，email，expectwork
  jobExpect: `${basicUrl}/IndBase`, // 求职期望 module
  jobExpectChild: `${basicUrl}/ExampleSection?module=Internship`,
  editUserBasicInfo: `${basicUrl}/StudentBasicsEdit`, // 修改用户基本信息 
  uploadImg: `${basicUrl}/UpdataResumesImg`, //上传单个简历图片
  uploadUserImg: `${basicUrl}/UpdataStudentImg`, // 上传头像

  getUserInfor: `${basicUrl}/UserDetails`, // 获取用户信息
  getUnvDegree: `${basicUrl}/getUnvDegree`, //获取学历 university_id
  getfacultyArray: `${basicUrl}/getfacultyArray`,//获取院系 university_id
  getMajorsArray: `${basicUrl}/getMajorsArray`,//获取专业 faculty_id
  studentEduEdit: `${basicUrl}/StudentEduEdit`,//学生信息修改
  getStuAuthCode: `${basicUrl}/getStuAuthCode`, //修改手机号密码 获取短信验证码
  valiCode: `${basicUrl}/StudentCodePwdEdit`, //验证 手机号 验证码匹配
};
