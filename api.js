const basicUrl = "https://stu.dazhao100.cn/api";

module.exports = {
  judgeStu: `${basicUrl}/judgeStu`,//判断微信用户是否存在
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
  feedback: `${basicUrl}/Feedback`, //建议反馈
  wxLogin: `${basicUrl}/WxLogin`,//微信登录
  getUserToken: `${basicUrl}/getUserToken?wxtoken=`, //获取id & token
  sendEmail: `${basicUrl}/SendEmail`, //简历投递
  getPositionList: `${basicUrl}/getPositionList`, //获取职位(相似职位接口+企业职位)
  getPositionOne: `${basicUrl}/getPositionOne`, //获取职位详情 token stu_id position_id
  getCompanyList: `${basicUrl}/getCompanyList`, //获取企业(推荐企业+企业职位)
  getCompanyOne: `${basicUrl}/getCompanyOne`,// 获取企业详情
  getStudentMis: `${basicUrl}/getStudentMis`, //获取消息通知
  getUnivNotice: `${basicUrl}/getUnivNotice`, //获取通知公告
  getPositionCollect: `${basicUrl}/getPositionCollect`, //用户职位 收藏夹
  getCompanyCollect: `${basicUrl}/getCompanyCollect`, //用户企业 收藏夹
  sendPosCollect: `${basicUrl}/SendPositionCollect`,//收藏职位
  sendComCollect: `${basicUrl}/SendCompanyCollect`,//收藏公司
  getZPType: `${basicUrl}/IndBase`, //职位推荐 获取单位类型 学历类型
  getPositionType: `${basicUrl}/getPositionType`,//获取招聘职位类型
  getIndustryList: `${basicUrl}/getIndustryList`, //目标行业小类
  getProvinceList: `${basicUrl}/getProvinceList`, //获取省份列表
  getCityList: `${basicUrl}/getCityList`, //获取城市列表
  deliveryResume: `${basicUrl}/SendPositionApply`,//投递简历 position_id resumes_id token stu_id
  getExpectList: `${basicUrl}/getExpectList`, //获取用户期望
  getSalaryBase: `${basicUrl}/getSalaryBase`, //薪资水平
  getunitsizeType: `${basicUrl}/getunitsizeType`,//公司规模
  sendPositionHate: `${basicUrl}/SendPositionHate`, //隐藏职位
  delExpect: `${basicUrl}/DelExpect`,// 删除求职期望
  sendExpect: `${basicUrl}/SendExpect`, // 添加求职期望
  getMydropinbox: `${basicUrl}/getMydropinbox`, //投递箱
  getMyinvitation: `${basicUrl}/getMyinvitation`, //邀请函
  pushSetting: `${basicUrl}/PushSetting`, //学生推送设置
  getPushSetting: `${basicUrl}/PushSetting`, //获取学生推送设置
  getStuForecast: `${basicUrl}/getStuForecast`, //后去AI推荐
};