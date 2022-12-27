import type { Resume } from './resume-type';

type Profile = Required<Required<Resume>['basics']>['profiles'][number];

export function findProfile(
  resume: Resume,
  predicate: (
    profile: Profile,
    index: number,
    arr: Profile[]
  ) => profile is Profile
) {
  return resume?.basics?.profiles?.find(predicate);
}
