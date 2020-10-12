export default {
  TITLE: "스터디메이트",
  baseUrl:
    "http://ec2-54-180-116-157.ap-northeast-2.compute.amazonaws.com:8888",
//   ServerUrl: "http://i3b205.p.ssafy.io:8080",
  ServerUrl: "http://localhost:8080",
  LS_KEY: {
    USER_TOKEN: "userToken",
  },
  ERROR: {
    FRONT_ERROR: "FE00",
  },
  URL_TYPE: {
    MAIN : "mainpage",
    ADMIN : "adminpage",
    USER: {
      SIGNUP: "signup",
      PROFILE: "profile",
      MEMBERPROFILE:"memberprofile",
      FINDPASSWORD: "findPassword",
    },
    POST: {
      MAIN: "main",
      POSTCREATE: "postCreate",
      POSTDETAIL: "postDetail",
      POSTDETAIL2: "postDetail2",
      POSTUPDATE: "postUpdate",
    },
    STUDY: {
      STUDYMAIN: "studymain",
      STUDYLEADERMAIN: "studyleadermain",
      DAILYCREATE: "dailycreate",
      DAILYDETAIL: "dailydetail",
      DAILYUPDATE: "dailyupdate",
      FILEUPLOAD: "fileupload"
    },
    BOARD: {
      BOARDMAIN: "boardmain",
      BOARDCREATE: "boardcreate",
      BOARDDETAIL: "boarddetail",
      BOARDUPDATE: "boardupdate",
    },
    RANK: {
      RANKING: "ranking"
    },
    ERROR: {
      PAGENOTFOUND: "pagenotfound",
      ERRORPAGE: "errorpage",
      DUPLICATE: "duplicate",
    },
  },
};
