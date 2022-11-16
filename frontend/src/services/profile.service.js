import { apiGetProfileInfo, apiAddProfileFeedback,apiGetReferralInfo ,apiUpdateReferralStatus ,apiGetStatusFromId } from "../utils/AppUtils";

const getProfileInfo = (profileId) => {
  return apiGetProfileInfo(profileId);
};

const addProfileFeedback = (createProfileFeedback) => {
  return apiAddProfileFeedback(createProfileFeedback);
};

const getReferralInfo = (referralId) => {
  return apiGetReferralInfo(referralId);
}

const updateReferralStatus = (referralStatus,referralId) => {
  return apiUpdateReferralStatus(referralStatus,referralId);
}

const getStatusFromId = (categoryId) => {
  return apiGetStatusFromId(categoryId);
}

const ProfileService = {
  getProfileInfo,
  addProfileFeedback,
  getReferralInfo,
  updateReferralStatus,
  getStatusFromId,
};

export default ProfileService;
