import MdOutlineRecycling from './MdOutlineRecycling.svg';
import MdFollowTheSigns from './MdFollowTheSigns.svg';
import MdGroups from './MdGroups.svg';

export function iconSrc(iconId) {
  if (iconId === 0) {
    return MdFollowTheSigns
  } else if (iconId === 1) {
    return MdGroups
  }

  return MdOutlineRecycling
}
