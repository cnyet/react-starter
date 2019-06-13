import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会焦点',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/7705786/a90dc05d-63f6-4690-8c1a-dcf7ff4422df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }, {
    id: 2,
    title: '社会焦点',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/7705786/a90dc05d-63f6-4690-8c1a-dcf7ff4422df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }, {
    id: 3,
    title: '社会焦点',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/7705786/a90dc05d-63f6-4690-8c1a-dcf7ff4422df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }, {
    id: 4,
    title: '社会焦点',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/7705786/a90dc05d-63f6-4690-8c1a-dcf7ff4422df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }, {
    id: 5,
    title: '社会焦点',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/7705786/a90dc05d-63f6-4690-8c1a-dcf7ff4422df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }]
});

export default (state=defaultState, action) => {
  switch(action.type) {
    default: 
    return state;
  }
}