import { ComponentMap, EntityMap } from 'share-stu-study-base/src/types/myComponents';
import {
  clsvStudentInfo_SimEN_Type,
  clsXzMajorEN_Type,
  clsStudentInfoEN_Type,
  clsStudentInfo_Type,
} from 'share-stu-study-base/types/myEntity';
import { clsStudentInfoEN } from 'share-stu-study-base/types/entities';
import { clsTeacherInfo_Type, clsTeacherInfoEN_Type } from 'share-stu-study-base/types/entities';
import { clsCurrEduClsEN_Type, clsCurrEduCls_Type } from 'share-stu-study-base/types/entities';

import {
  clscc_CourseKnowledges_Type,
  clscc_CourseKnowledgesEN_Type,
  clscc_CourseKnowledgesENEx_Type,
} from 'share-stu-study-base/types/entities';

import {
  clscc_KnowledgeModules_Type,
  clscc_KnowledgeModulesEN_Type,
  clscc_KnowledgeModulesENEx_Type,
} from 'share-stu-study-base/types/entities';

import {
  clsgs_KnowledgesLogicEN_Type,
  clsgs_KnowledgesLogicRelaEN_Type,
} from 'share-stu-study-base/types/entities';
import { clsXzSchoolEN_Type } from 'share-stu-study-base/types/entities';
import { clsXzGradeEN_Type } from 'share-stu-study-base/types/entities';
import { clscc_CourseEN_Type } from 'share-stu-study-base/types/entities';
import { clsSchoolTermEN_Type } from 'share-stu-study-base/types/entities';
import { clsKnowledgeTypeEN_Type } from 'share-stu-study-base/types/entities';
import { clsvXzMajorDirectionEN_Type } from 'share-stu-study-base/types/entities';
import { clsgs_RelaTypeEN_Type } from 'share-stu-study-base/types/entities';
import { clsvCurrEduClsTeacherEN_Type } from 'share-stu-study-base/types/entities';
import { clsvCurrEduClsStuEN_Type } from 'share-stu-study-base/types/entities';
import { clsXzClg_Type } from 'share-stu-study-base/types/entities';
import { clsXzClgEN_Type } from 'share-stu-study-base/types/entities';
import { clscc_CourseChapter_Type } from 'share-stu-study-base/types/entities';
import { clscc_CourseChapterEN_Type } from 'share-stu-study-base/types/entities';
import { clscc_CourseChapterENEx_Type } from 'share-stu-study-base/types/entities';

import { clsQxUsersEN_Type } from 'share-gen-plat-base-lib/types/entities';
import { clsQxRolesEN_Type } from 'share-gen-plat-base-lib/types/entities';

import { enumQxRoles_Type } from 'share-gen-plat-base-lib/types/entities';
import { clsvQxUsersSimEN_Type } from 'share-gen-plat-base-lib/types/entities';
import { clsQxPrjMenusEN_Type } from 'share-gen-plat-base-lib/types/entities';
import { clsQxPrjMenus_Type } from 'share-gen-plat-base-lib/types/entities';
import { clsQxPrjMenuSetEN_Type } from 'share-gen-plat-base-lib/types/entities';
import { clsQxPrjMenuSet_Type } from 'share-gen-plat-base-lib/types/entities';

import { clsQxRoleMenusEN_Type } from 'share-gen-plat-base-lib/types/entities';
import { clsQxRoleMenus_Type } from 'share-gen-plat-base-lib/types/entities';

import { clsQxUserRoleRelationEN_Type } from 'share-gen-plat-base-lib/types/entities';
import { clsQxUserRoleRelation_Type } from 'share-gen-plat-base-lib/types/entities';

import { clsvQxUsersSimEN_Type } from 'share-gen-plat-base-lib/types/entities';
import { clsvQxUsersSim_Type } from 'share-gen-plat-base-lib/types/entities';

// declare global {
//   type GlobalComponentMap = ComponentMap;
// }
import packageJSON from '../package.json';
import type {
  VNode,
  VNodeChild,
  SetupContext,
  EmitsOptions,
  PropType as VuePropType,
  ComponentPublicInstance,
  FunctionalComponent,
} from 'vue';
declare global {
  type GlobalComponentMap = ComponentMap;
  type GlobalEntityMap = EntityMap;
  type clsvStudentInfo_SimEN_T = clsvStudentInfo_SimEN_Type;
  type clsXzMajorEN_T = clsXzMajorEN_Type;
  type clsStudentInfoEN_T = clsStudentInfoEN_Type;
  type clsStudentInfo_T = clsStudentInfo_Type;
  type clsStudentInfoEN_G = clsStudentInfoEN;
  type clsTeacherInfo_T = clsTeacherInfo_Type;
  type clsTeacherInfoEN_T = clsTeacherInfoEN_Type;
  type clsCurrEduClsEN_T = clsCurrEduClsEN_Type;
  type clsCurrEduCls_T = clsCurrEduCls_Type;
  type clscc_CourseKnowledgesEN_T = clscc_CourseKnowledgesEN_Type;
  type clscc_CourseKnowledges_T = clscc_CourseKnowledges_Type;
  type clscc_KnowledgeModules_T = clscc_KnowledgeModules_Type;
  type clscc_KnowledgeModulesEN_T = clscc_KnowledgeModulesEN_Type;
  type clscc_KnowledgeModulesENEx_T = clscc_KnowledgeModulesENEx_Type;
  type clscc_CourseKnowledgesENEx_T = clscc_CourseKnowledgesENEx_Type;
  type clsgs_KnowledgesLogicEN_T = clsgs_KnowledgesLogicEN_Type;
  type clsgs_KnowledgesLogicRelaEN_T = clsgs_KnowledgesLogicRelaEN_Type;
  type clsXzSchoolEN_T = clsXzSchoolEN_Type;
  type clsXzGradeEN_T = clsXzGradeEN_Type;
  type clscc_CourseEN_T = clscc_CourseEN_Type;
  type clsSchoolTermEN_T = clsSchoolTermEN_Type;
  type clsge_LevelModeTypeEN_T = clsge_LevelModeTypeEN_Type;
  type clsvCurrEduCls_SimEN_T = clsvCurrEduCls_SimEN_Type;
  type clscc_CourseChapterEN_T = clscc_CourseChapterEN_Type;
  type clscc_CourseChapter_T = clscc_CourseChapter_Type;
  type clsKnowledgeMasterTypeEN_T = clsKnowledgeMasterTypeEN_Type;
  type clsKnowledgeMasterLevelEN_T = clsKnowledgeMasterLevelEN_Type;
  type clsgs_KnowledgesGraphEN_T = clsgs_KnowledgesGraphEN_Type;
  type clsge_StructureSectionTypeEN_T = clsge_StructureSectionTypeEN_Type;
  type clsgs_KnowledgesGraphEN_T = clsgs_KnowledgesGraphEN_Type;
  type clsvCurrEduClsStu_SimEN_T = clsvCurrEduClsStu_SimEN_Type;
  type clsKnowledgeTypeEN_T = clsKnowledgeTypeEN_Type;
  type clsvXzMajorDirectionEN_T = clsvXzMajorDirectionEN_Type;
  type clsgs_RelaTypeEN_T = clsgs_RelaTypeEN_Type;
  type clsvCurrEduClsTeacherEN_T = clsvCurrEduClsTeacherEN_Type;
  type clsvCurrEduClsStuEN_T = clsvCurrEduClsStuEN_Type;
  type clsXzClg_T = clsXzClg_Type;
  type clsXzClgEN_T = clsXzClgEN_Type;
  type clscc_CourseChapterENEx_T = clscc_CourseChapterENEx_Type;
  type clsQxUsersEN_T = clsQxUsersEN_Type;
  type clsQxRolesEN_T = clsQxRolesEN_Type;
  type enumQxRoles_T = enumQxRoles_Type;
  type clsvQxUsersSimEN_T = clsvQxUsersSimEN_Type;
  type clsQxPrjMenusEN_T = clsQxPrjMenusEN_Type;
  type clsQxPrjMenus_T = clsQxPrjMenus_Type;
  type clsQxPrjMenuSetEN_T = clsQxPrjMenuSetEN_Type;
  type clsQxPrjMenuSet_T = clsQxPrjMenuSet_Type;

  type clsQxRoleMenusEN_T = clsQxRoleMenusEN_Type;
  type clsQxRoleMenus_T = clsQxRoleMenus_Type;
  type clsQxUserRoleRelationEN_T = clsQxUserRoleRelationEN_Type;
  type clsQxUserRoleRelation_T = clsQxUserRoleRelation_Type;

  type clsvQxUsersSimEN_T = clsvQxUsersSimEN_Type;
  type clsvQxUsersSim_T = clsvQxUsersSim_Type;

  const __APP_INFO__: {
    pkg: typeof packageJSON;
    lastBuildTime: string;
  };
  interface Window {
    jsMind: any;
    layui: Layui.Layui;
  }

  // declare interface Window {
  //   // Global vue app instance
  //   __APP__: App<Element>;
  // }

  // vue
  type PropType<T> = VuePropType<T>;
  type VueNode = VNodeChild | JSX.Element;

  export type Writable<T> = {
    -readonly [P in keyof T]: T[P];
  };
  type RemoveIndex<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K];
  };
  type Nullable<T> = T | null;

  type Recordable<T = any> = Record<string, T>;
  type Key = string | number;
  type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T;
  };
  type Indexable<T = any> = {
    [key: string]: T;
  };
  type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
  };

  type TimeoutHandle = ReturnType<typeof setTimeout>;
  type IntervalHandle = ReturnType<typeof setInterval>;

  interface ChangeEvent extends Event {
    target: HTMLInputElement;
  }

  interface WheelEvent {
    path?: EventTarget[];
  }
  function parseInt(s: string | number, radix?: number): number;

  function parseFloat(string: string | number): number;

  type EmitFn<E = EmitsOptions> = SetupContext<E>['emit'];

  namespace JSX {
    interface ElementAttributesProperty {
      $props: {};
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface IntrinsicAttributes {
      [elem: string]: any;
    }
  }
}
