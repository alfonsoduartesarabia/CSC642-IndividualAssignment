/**
 * Fake authetication to check whether the user has completed the survey or not 
 */
export const useAuth = {
  isAuthenticated: false,
  completed(callBack) {
    useAuth.isAuthenticated = true
    callBack()
  },
};
