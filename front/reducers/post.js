export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '2now',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src: 'https://mblogthumb-phinf.pstatic.net/MjAyMTA2MjBfMjUw/MDAxNjI0MTUxNTkxMjUz.AxO3Pn8J-qXdvL0uBSYXOrZR9R5IwizdGWLynCC8RcQg.rtPh6xoNJu-tiZ7IAjyXs8Av1ZaZl-s-wXf6YtxaOLcg.JPEG.designpress2016/%EC%9D%B4%EC%97%B0_%EA%B7%B8%EB%A6%BC_11.jpg?type=w800',
        },
        {
          src: 'https://storage.oneslist.com/assets/2021/07/13141704/dmitrii-776x1024.jpeg',
        },
        {
          src: 'https://mblogthumb-phinf.pstatic.net/MjAyMTA2MjBfMTcx/MDAxNjI0MTUxNTg5MTA4.3sdJslxHkJU0iZFKAbbej91JUeTNEJMBdTQx5zbBYhAg.Yq_Z0ANkXgoaVb4Echq6IoAELcJnpzu3-hZgruKkWVIg.JPEG.designpress2016/IMG_6781_%EC%82%AC%EB%B3%B8-1.jpg?type=w800',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'hero',
          },
          content: '그림이 너무 예뻐요 !',
        },
        {
          User: {
            nickname: 'drawingman',
          },
          content: '제 그림도 구경오세요 ~',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "it's dummydata",
  User: {
    id: 1,
    nickname: '2now',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
