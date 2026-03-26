import { defineStore } from 'pinia';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';

interface KnowledgeQuestionNum {
  courseKnowledgeId: string;
  questionNum: number;
}

interface UserState {
  courseKnowledgeId: string;
  questionNum: number;
  knowledgeQuestionNumLst: KnowledgeQuestionNum[];
  token?: string;
}

// 从缓存中获取初始值
const initialKnowledgeQuestionNumLst =
  Storage.getV2<KnowledgeQuestionNum[]>('knowledgeQuestionNumLst') || [];

export const useKnowledgeQuestionNumStore = defineStore('knowledgeQuestionNum', {
  state: (): UserState => ({
    courseKnowledgeId: initialKnowledgeQuestionNumLst[0]?.courseKnowledgeId || '',
    questionNum: initialKnowledgeQuestionNumLst[0]?.questionNum || 0,
    knowledgeQuestionNumLst: initialKnowledgeQuestionNumLst,
    token: Storage.getV2<string>(ACCESS_TOKEN_KEY) || '',
  }),

  getters: {
    getQuestionNum(): number {
      return this.questionNum;
    },
    getCourseKnowledgeId(): string {
      return this.courseKnowledgeId;
    },
  },

  actions: {
    /** 清空token及用户信息 */
    resetToken() {
      this.token = '';
      this.knowledgeQuestionNumLst = [];
      Storage.clear();
    },

    /** 登录成功保存token */
    setToken(token: string) {
      this.token = token;
      const ex = 7 * 24 * 60 * 60 * 1000; // 7天过期时间
      Storage.setV2(ACCESS_TOKEN_KEY, this.token, ex);
    },

    /** 获取指定知识点的题目数量 */
    getQuestionNumByCourseKnowledgeId(strCourseKnowledgeId: string): number {
      if (!strCourseKnowledgeId) return 0;

      const knowledgeItem = this.knowledgeQuestionNumLst.find(
        (item) => item.courseKnowledgeId === strCourseKnowledgeId,
      );
      return knowledgeItem?.questionNum || 0;
    },

    /** 设置指定知识点的题目数量 */
    setQuestionNum(strCourseKnowledgeId: string, strQuestionNum: number) {
      const knowledgeItem = this.knowledgeQuestionNumLst.find(
        (item) => item.courseKnowledgeId === strCourseKnowledgeId,
      );

      if (knowledgeItem) {
        knowledgeItem.questionNum = strQuestionNum;
      } else {
        this.knowledgeQuestionNumLst.push({
          courseKnowledgeId: strCourseKnowledgeId,
          questionNum: strQuestionNum,
        });
      }

      // 更新缓存
      Storage.setV2('knowledgeQuestionNumLst', this.knowledgeQuestionNumLst);
    },
    /** 删除指定知识点的题目数量 */
    deleteQuestionNum(strCourseKnowledgeId: string) {
      this.knowledgeQuestionNumLst = this.knowledgeQuestionNumLst.filter(
        (item) => item.courseKnowledgeId !== strCourseKnowledgeId,
      );

      // 更新缓存
      Storage.setV2('knowledgeQuestionNumLst', this.knowledgeQuestionNumLst);
    },
    /** 登出 */
    async logout() {
      this.courseKnowledgeId = '';
      this.questionNum = 0;
      this.knowledgeQuestionNumLst = [];
      this.resetToken();
      Storage.setV2('knowledgeQuestionNumLst', this.knowledgeQuestionNumLst);
    },
  },
});

// export const knowledgeQuestionNumStore = useKnowledgeQuestionNumStore();
