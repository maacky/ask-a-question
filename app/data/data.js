/*-----------------QUESTIONS-----------------*/

export const questions = [
  {
    questionId: 1,
    authorId: 1,
    status: 'asked',
    comments: [1, 2, 3, 4, 5, 6],
    answers: [1, 44],
    discussions: [3, 19, 201], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    conversations: [28, 176], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    peersInvolved: [1, 2, 3, 7, 10, 19, 23, 44], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    question: 'Will insulin make my patient gain weight?',
    isHot: true,
    dateAdded: '2017-08-09T14:48:00.000Z',
    dateLastCommented: '2017-08-09T20:48:00.000Z',
    upvotes: 3,
    downvotes: 1,
    questionText:
      'All my patients with diabetes should see an ophthalmologist yearly for a dialated eye examination- begining at diagnosis inpeople with type 2 diabetes, and after 5 years in people with type 1 diabetes after puberty. Patients with know eye disease, symptoms of blurred vision in one eye, or blind spots need to see their ophthalmologist more frequently.'
  },
  {
    questionId: 2,
    authorId: 2,
    status: 'asked',
    comments: [7, 8, 9],
    answers: [4],
    discussions: [85, 89, 134, 201], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    conversations: [4, 28, 176, 233], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    peersInvolved: [1, 2, 3, 7, 10, 19, 23, 44, 144], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    question: 'Vegan diet to stop diabetes progress',
    isHot: false,
    dateAdded: '2000-10-05T14:48:00.000Z',
    dateLastCommented: '2001-08-09T14:48:00.000Z',
    upvotes: 2,
    downvotes: 1,
    questionText:
      'A 2012 Cochrane Collaboration systematic review of controlled clinical trials of exercise interventions in cancer survivors indicated that physical activity may have beneficial effects on overall health-related quality of life and on specific quality-of-life issues, including body image/self-esteem, emotional well-being, sexuality, sleep disturbance, social functioning, anxiety, fatigue, and pain.'
  },
  {
    questionId: 3,
    authorId: 5,
    status: 'asked',
    comments: [16, 17, 18, 19, 20, 21, 22, 23, 24],
    answers: [2],
    discussions: [85, 89, 134, 201], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    conversations: [4, 28, 176], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    peersInvolved: [1, 2, 3, 7, 10, 19, 23, 44], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    question: 'Vegan diet in diabetes treatment?',
    isHot: false,
    dateAdded: '2017-08-09T10:48:00.000Z',
    dateLastCommented: '2017-08-10T14:48:00.000Z',
    upvotes: 5,
    downvotes: 5,
    questionText:
      'For children and adolescents, the guidelines recommend at least 60 minutes (1 hour) of physical activity daily. Most of the 60 or more minutes a day should be either moderate- or vigorous-intensity aerobic physical activity, and should include vigorous-intensity physical activity at least 3 days a week.'
  },
  {
    questionId: 4,
    authorId: 8,
    status: 'asked',
    comments: [10, 11],
    answers: [5],
    discussions: [1, 3, 19, 85, 89, 134, 201, 354], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    conversations: [4, 28, 176], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    peersInvolved: [1, 2, 3, 4, 7, 10, 19, 23, 44], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    question: 'Good carbs vs bad carbs?',
    isHot: true,
    dateAdded: '2015-10-05T14:48:00.000Z',
    dateLastCommented: '2017-01-01T14:48:00.000Z',
    upvotes: 8,
    downvotes: 2,
    questionText:
      'Sedentary behavior, such as prolonged periods of television viewing, sitting, and lying down, is a risk factor for developing chronic conditions, including cancer, cardiovascular disease, and type 2 diabetes, and for premature death.'
  },
  {
    questionId: 5,
    authorId: 8,
    status: 'asked',
    comments: [12],
    answers: [6],
    discussions: [2, 3, 19, 85, 89, 134, 201], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    conversations: [4, 28, 176], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    peersInvolved: [1, 2, 3, 7, 10, 19, 23, 44], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    question: 'Potassium water for cancer patiens?',
    isHot: false,
    dateAdded: '2013-10-05T14:48:00.000Z',
    dateLastCommented: '2015-09-10T14:48:00.000Z',
    upvotes: 7,
    downvotes: 5,
    questionText:
      'Nearly all of the evidence linking physical activity to cancer risk comes from observational studies, in which individuals report on their physical activity and are followed for years for diagnoses of cancer. Data from observational studies can give researchers clues about the relationship between physical activity and cancer risk.'
  },
  {
    questionId: 6,
    authorId: 8,
    status: 'asked',
    comments: [25, 26],
    answers: [3],
    discussions: [3, 19, 20, 21, 22, 85, 89, 134, 201], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    conversations: [4, 28, 176], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    peersInvolved: [1, 2, 3, 7, 10, 19, 22, 23, 44], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    question: 'Does my patient need diet before surgery?',
    isHot: false,
    dateAdded: '2017-07-30T14:48:00.000Z',
    dateLastCommented: '2017-08-01T20:48:00.000Z',
    upvotes: 4,
    downvotes: 1,
    questionText:
      'Many studies show that physically active women have a lower risk of breast cancer than inactive women; in a 2013 meta-analysis of 31 prospective studies, the average breast cancer risk reduction associated with physical activity was 12%.'
  },
  {
    questionId: 7,
    authorId: 3,
    status: 'asked',
    comments: [13, 14, 15],
    answers: [7],
    discussions: [3, 4, 19, 85, 89, 134, 201, 556], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    conversations: [4, 28, 176], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    peersInvolved: [1], //THIS IS NOT HOW THINGS WOULD BE NORMALLY HANDLED IN SUCH AN APP BUT I CHOSE THIS WAY SO AS NOT TO HAVE TO INDEFINITELY EXPAND THE DATA SET
    question: 'Vegetarian died and leukemia',
    isHot: true,
    dateAdded: '1999-10-05T14:48:00.000Z',
    dateLastCommented: '2004-03-04T14:48:00.000Z',
    upvotes: 10,
    downvotes: 15,
    questionText:
      'Physical activity is defined as any movement that uses skeletal muscles and requires more energy than does resting. Physical activity can include working, exercising, performing household chores, and leisure-time activities such as walking, tennis, hiking, bicycling, and swimming.'
  }
];

/*-----------------USERS-----------------*/
export const users = [
  {
    userId: 1,
    title: 'Dr',
    firstName: 'Eva',
    lastName: 'McBorrough',
    imgUrl: 'https://m2hair.files.wordpress.com/2014/07/long-square-face.jpg',
    dateJoined: '2012-04-22T14:48:00.000Z',
    lastLogged: '2017-08-06T17:03:00.000Z',
    activityLevel: 2,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [28, 40, 108, 212],
    questionsFollowed: [3, 18, 92, 177]
  },
  {
    userId: 2,
    title: 'Dr',
    firstName: 'Tom',
    lastName: 'McBorrough',
    imgUrl:
      'http://www.menshairstyletrends.com/wp-content/uploads/2014/08/Hairstyles-for-Square-Faces-Men-Ryan-Seacrest-Hair.jpg',
    dateJoined: 'new',
    lastLogged: 'new',
    activityLevel: 3,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [],
    questionsFollowed: []
  },
  {
    userId: 3,
    title: 'Mr',
    firstName: 'John',
    lastName: 'Kavanagh',
    imgUrl:
      'https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2017/01/matt-bomer-square-face.jpg',
    dateJoined: 'new',
    lastLogged: 'new',
    activityLevel: 1,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [],
    questionsFollowed: []
  },
  {
    userId: 4,
    title: 'Dr',
    firstName: 'Mike',
    lastName: 'Flynn',
    imgUrl:
      'http://machohairstyles.com/wp-content/uploads/2016/06/Urban-Pompadour.jpg',
    dateJoined: 'new',
    lastLogged: 'new',
    activityLevel: 1,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [],
    questionsFollowed: []
  },
  {
    userId: 5,
    title: 'Dr',
    firstName: 'Sarah',
    lastName: 'Abberton',
    imgUrl:
      'https://s-media-cache-ak0.pinimg.com/originals/72/45/2b/72452b907c61d21363fafdd1c4a452e6.jpg',
    dateJoined: 'new',
    lastLogged: 'new',
    activityLevel: 3,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [],
    questionsFollowed: []
  },
  {
    userId: 6,
    title: 'Ms',
    firstName: 'Martha',
    lastName: 'Quinsey',
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
    title: 'Mr',
    firstName: 'Emmanuel',
    lastName: 'Bodongo',
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
    title: 'Ms',
    firstName: 'Patricia',
    lastName: 'Abirtonne',
    imgUrl:
      'https://s-media-cache-ak0.pinimg.com/736x/da/e9/ec/dae9ec9566ee9a7a2c661dc40aace77c--rock-on-short-hairstyles-for-women.jpg',
    dateJoined: 'new',
    lastLogged: 'new',
    activityLevel: 1,
    peers: [1, 5, 6, 8, 9, 122, 3432],
    discussions: [4, 5, 76, 89, 177, 6667],
    findings: [4, 7, 778, 1003],
    questionsAsked: [],
    questionsFollowed: []
  }
];

/*-----------------COMMENTS-----------------*/
export const comments = [
  {
    commentId: 1,
    authorId: 2,
    questionId: 1
  },
  {
    commentId: 2,
    authorId: 3,
    questionId: 1
  },
  {
    commentId: 3,
    authorId: 4,
    questionId: 1
  },
  {
    commentId: 4,
    authorId: 5,
    questionId: 1
  },
  {
    commentId: 5,
    authorId: 6,
    questionId: 1
  },
  {
    commentId: 6,
    authorId: 7,
    questionId: 1
  },
  {
    commentId: 7,
    authorId: 1,
    questionId: 2
  },
  {
    commentId: 8,
    authorId: 3,
    questionId: 2
  },
  {
    commentId: 9,
    authorId: 5,
    questionId: 2
  },
  {
    commentId: 10,
    authorId: 5,
    questionId: 4
  },
  {
    commentId: 11,
    authorId: 1,
    questionId: 4
  },
  {
    commentId: 12,
    authorId: 2,
    questionId: 5
  },
  {
    commentId: 13,
    authorId: 2,
    questionId: 7
  },
  {
    commentId: 14,
    authorId: 1,
    questionId: 7
  },
  {
    commentId: 15,
    authorId: 4,
    questionId: 7
  },
  {
    commentId: 16,
    authorId: 4,
    questionId: 3
  },
  {
    commentId: 17,
    authorId: 8,
    questionId: 3
  },
  {
    commentId: 18,
    authorId: 6,
    questionId: 3
  },
  {
    commentId: 19,
    authorId: 9,
    questionId: 3
  },
  {
    commentId: 20,
    authorId: 10,
    questionId: 3
  },
  {
    commentId: 21,
    authorId: 11,
    questionId: 3
  },
  {
    commentId: 22,
    authorId: 12,
    questionId: 3
  },
  {
    commentId: 23,
    authorId: 13,
    questionId: 3
  },
  {
    commentId: 24,
    authorId: 14,
    questionId: 3
  },
  {
    commentId: 25,
    authorId: 6,
    questionId: 6
  },
  {
    commentId: 26,
    authorId: 3,
    questionId: 6
  },
  {
    commentId: 30,
    authorId: 5,
    answerId: 1,
    comment:
      'You should check your feet daily for redness, caluses, cracks or skin breakdown.',
    upvotes: 2,
    downvotes: 0,
    dateAdded: '2017-08-10T17:13:34.000Z'
  },
  {
    commentId: 100,
    authorId: 1,
    answerId: 6,
    comment: 'Remember, though, to always consult common sense first.',
    upvotes: 6,
    downvotes: 0,
    dateAdded: '2017-08-12T17:13:34.000Z'
  },
  {
    commentId: 101,
    authorId: 3,
    answerId: 5,
    comment:
      'Not all symptoms need to be immediately considered as potentially dangerous.',
    upvotes: 6,
    downvotes: 6,
    dateAdded: '2017-08-11T23:13:34.000Z'
  },
  {
    commentId: 102,
    authorId: 3,
    answerId: 6,
    comment:
      'Check most recent online publications on the topic to find out more.',
    upvotes: 2,
    downvotes: 13,
    dateAdded: '2017-08-12T17:13:34.000Z'
  },
  {
    commentId: 103,
    authorId: 2,
    answerId: 2,
    comment: 'Remember to ask your medical advisor on your next appointment.',
    upvotes: 5,
    downvotes: 4,
    dateAdded: '2017-08-12T16:13:34.000Z'
  }
];

/*-----------------ANSWERS-----------------*/
export const answers = [
  {
    answerId: 1,
    authorId: 8,
    questionId: 1,
    answer:
      'Numbers or tingling in your feet should be reported to your doctor at your regular visits.',
    comments: [30],
    upvotes: 8,
    downvotes: 4,
    dateAdded: '2017-08-09T08:27:00.000Z'
  },
  {
    answerId: 2,
    authorId: 3,
    questionId: 3,
    answer: 'This should be immediately reported to your doctor.',
    comments: [103],
    upvotes: 10,
    downvotes: 20,
    dateAdded: '2017-07-15T20:27:22.000Z'
  },
  {
    answerId: 3,
    authorId: 1,
    questionId: 6,
    answer:
      'To be able to answer, one would need more data in order to come up with reasonable advice.',
    comments: [],
    upvotes: 15,
    downvotes: 15,
    dateAdded: '2017-08-01T11:03:22.000Z'
  },
  {
    answerId: 4,
    authorId: 4,
    questionId: 2,
    answer: 'This could be dangerous and, as such, ahould be avoided.',
    comments: [],
    upvotes: 8,
    downvotes: 7,
    dateAdded: '2017-02-14T20:03:22.000Z'
  },
  {
    answerId: 5,
    authorId: 2,
    questionId: 4,
    answer:
      'This distinction no longer holds in the light of the most rcent findings.',
    comments: [101],
    upvotes: 5,
    downvotes: 10,
    dateAdded: '2017-01-22T20:03:22.000Z'
  },
  {
    answerId: 6,
    authorId: 6,
    questionId: 5,
    answer: 'To find out, read Jonh Buhlynne, especially "The art of knowing."',
    comments: [100, 102],
    upvotes: 12,
    downvotes: 4,
    dateAdded: '2017-04-10T20:03:22.000Z'
  },
  {
    answerId: 7,
    authorId: 5,
    questionId: 7,
    answer:
      'Such complicated issues should be discussed with your pediatrician, who knows you and your actual condition.',
    comments: [],
    upvotes: 1,
    downvotes: 1,
    dateAdded: '2017-05-10T20:03:22.000Z'
  },
  {
    answerId: 44,
    authorId: 3,
    questionId: 1,
    answer:
      'When your blood sugar is low, your body gives out signs that you need food. Different people have different symptoms. You will learn to know your symptoms.',
    comments: [],
    upvotes: 0,
    downvotes: 3,
    dateAdded: '2017-08-10T20:03:22.000Z'
  }
];

/*-----------------LOGGED USER-----------------*/
export const loggedUser = {
  userId: 666,
  questionsFollowed: [1, 3, 6, 7]
};
