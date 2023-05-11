import { atom, selector } from "recoil";

const users = atom({
    key: "user",
    default: new Map<string, {
        username: string,
        password: string,
    }>()
})

const userGet = selector({
    key: 'userGet', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const user = get(users);
  
      return user;
    },
  });

const signInState = atom({
    key:"loginstate",
    default: ""
})

const loginStateGet = selector({
    key: 'loginstateGet', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const signInStat = get(signInState);
  
      return signInStat;
    },
  });

export {
    users,
    userGet,
    signInState,
    loginStateGet
};