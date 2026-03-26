import { ref, reactive } from 'vue';

const refDivLayout = ref();

const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
});

export { divVarSet, refDivLayout, refDivQuery, refDivFunction, refDivList, refDivEdit };
