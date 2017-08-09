/*-----------------QUESTIONS-----------------*/

export const questions = [
  {
    questionId: 1,
    authorId: 1,
    status: 'asked',
    comments: [1, 2, 3, 4, 5, 6],
    answer: {
      authorId: 8
    },
    usersInvolved: [2, 3, 4, 5, 6, 7],
    discussions: [],
    conversations: [],
    question:
      'MOST RECENT ON MY SHELF Will insulin make my patient gain weight?',
    isHot: true,
    dateAdded: 'Aug 09 2017 1:00:00 PM'
  },
  {
    questionId: 2,
    authorId: 2,
    status: 'asked',
    comments: [7, 8, 9, 10, 11, 12, 13, 14, 15],
    answer: {
      authorId: 3
    },
    usersInvolved: [4, 6, 8, 9, 10, 11, 12, 13, 14],
    discussions: [],
    conversations: [],
    question: 'Vegan diet to stop diabetes progress',
    isHot: false,
    dateAdded: 'Mar 12 2012 10:00:00 AM'
  },
  {
    questionId: 3,
    authorId: 5,
    status: 'asked',
    comments: [16, 17, 18, 19, 20, 21, 22, 23, 24],
    answer: {
      authorId: 3
    },
    usersInvolved: [3, 6],
    discussions: [],
    conversations: [],
    question: 'SLIGHTLY LESS RECENT my shelf Vegan diet in diabetes treatment?',
    isHot: false,
    dateAdded: 'Aug 09 2017 11:00:00 AM'
  },
  {
    questionId: 4,
    authorId: 8,
    status: 'asked',
    comments: [16, 17],
    answer: {
      authorId: 1
    },
    usersInvolved: [3, 6],
    discussions: [],
    conversations: [],
    question: 'Another hot question',
    isHot: true,
    dateAdded: 'Mar 12 2012 10:00:00 AM'
  },
  {
    questionId: 5,
    authorId: 8,
    status: 'asked',
    comments: [16, 17],
    answer: {
      authorId: 1
    },
    usersInvolved: [3, 6],
    discussions: [],
    conversations: [],
    question: 'Vegan diet to stop diabetes progress',
    isHot: false,
    dateAdded: 'Mar 12 2012 10:00:00 AM'
  },
  {
    questionId: 6,
    authorId: 8,
    status: 'asked',
    comments: [25, 26],
    answer: {
      authorId: 1
    },
    usersInvolved: [3, 6],
    discussions: [],
    conversations: [],
    question: 'THIRD MOST RECENT shelf Vegan diet to stop diabetes progress',
    isHot: false,
    dateAdded: 'May 31 2017 10:00:00 PM'
  },
  {
    questionId: 7,
    authorId: 8,
    status: 'asked',
    comments: [16, 17],
    answer: {
      authorId: 1
    },
    usersInvolved: [3, 6],
    discussions: [],
    conversations: [],
    question:
      'last mr shelf LAST HOT QUESTION Vegan diet to stop diabetes progress',
    isHot: true,
    dateAdded: 'May 12 2014 10:00:00 AM'
  }
];

/*-----------------USERS-----------------*/
export const users = [
  {
    userId: 1,
    firstName: 'Eva',
    lastName: 'McBorrough',
    imgUrl: 'https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg',
    dateJoined: 'new',
    lastLogged: 'new',
    activityLevel: 2,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [],
    questionsFollowed: []
  },
  {
    userId: 2,
    firstName: 'Tom',
    lastName: 'McBorrough',
    imgUrl:
      'http://www.menshairstyletrends.com/wp-content/uploads/2014/08/Hairstyles-for-Square-Faces-Men-Ryan-Seacrest-Hair.jpg',
    dateJoined: 'new',
    lastLogged: 'new',
    activityLevel: 2,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [],
    questionsFollowed: []
  },
  {
    userId: 3,
    firstName: 'John',
    lastName: 'McBorrough',
    imgUrl:
      'https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2017/01/matt-bomer-square-face.jpg',
    dateJoined: 'new',
    lastLogged: 'new',
    activityLevel: 2,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [],
    questionsFollowed: []
  },
  {
    userId: 4,
    firstName: 'Eva',
    lastName: 'McBorrough',
    imgUrl:
      'http://machohairstyles.com/wp-content/uploads/2016/06/Urban-Pompadour.jpg',
    dateJoined: 'new',
    lastLogged: 'new',
    activityLevel: 2,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [],
    questionsFollowed: []
  },
  {
    userId: 5,
    firstName: 'Eva',
    lastName: 'McBorrough',
    imgUrl:
      'https://s-media-cache-ak0.pinimg.com/originals/72/45/2b/72452b907c61d21363fafdd1c4a452e6.jpg',
    dateJoined: 'new',
    lastLogged: 'new',
    activityLevel: 2,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [],
    questionsFollowed: []
  },
  {
    userId: 6,
    firstName: 'Eva',
    lastName: 'McBorrough',
    imgUrl:
      'http://www.coolshorthairstyles.com/wp-content/uploads/2014/09/short-hairstyles-for-square-face-blonde-with-bangs.jpg',
    dateJoined: 'new',
    lastLogged: 'new',
    activityLevel: 2,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [],
    questionsFollowed: []
  },
  {
    userId: 8,
    firstName: 'Eva',
    lastName: 'McBorrough',
    imgUrl:
      'http://glamyhair.com/wp-content/uploads/2013/12/Perfect-Short-Hairstyle-for-Men-with-Square-Face.jpg',
    dateJoined: 'new',
    lastLogged: 'new',
    activityLevel: 2,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [],
    questionsFollowed: []
  },
  {
    userId: 9,
    firstName: 'Eva',
    lastName: 'McBorrough',
    imgUrl:
      'https://s-media-cache-ak0.pinimg.com/736x/da/e9/ec/dae9ec9566ee9a7a2c661dc40aace77c--rock-on-short-hairstyles-for-women.jpg',
    dateJoined: 'new',
    lastLogged: 'new',
    activityLevel: 2,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [],
    questionsFollowed: []
  }
];

/*-----------------LOGGED USER-----------------*/
export const loggedUser = {
  userId: 666,
  questionsFollowed: [1, 3, 6, 7]
};
