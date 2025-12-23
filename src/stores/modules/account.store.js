import { ref } from 'vue'
import { getDatePeriod } from '@util'

export const useAccountStore = defineStore('accountStore', () => {
  const account = ref(null)
  const profileLoading = ref(false)

  const personalList = ref(null)
  const personalLoading = ref(false)

  const personalInfoLoading = ref(false)
  const personalInfo = ref(null)
  const oldCareerList = ref([])
  const newCareerList = ref([])
  const medList = ref([])
  const relativeList = ref([])
  const vacationList = ref([])
  const incentiveList = ref([])
  const punishmentList = ref([])
  const activePath = ref(null)

  async function fetchProfile() {
    profileLoading.value = true
    $ApiService.authService
      .profile()
      .then((res) => {
        const { last_name, first_name, middle_name } = res.data.data?.worker
        account.value = {
          photo: res.data.data?.worker?.photo,
          fullName: `${last_name} ${first_name} ${middle_name}`,
          organization: res.data.data?.organization?.name,
        }
      })
      .finally(() => {
        profileLoading.value = false
      })
  }

  async function fetchPersonalList() {
    personalLoading.value = true
    $ApiService.authService
      .personalList()
      .then((res) => {
        personalList.value = res.data.data
      })
      .finally(() => {
        personalLoading.value = false
      })
  }

  async function fetchPersonalInfo() {
    personalInfoLoading.value = true
    return $ApiService.authService
      .personalInfo()
      .then((res) => {
        personalInfo.value = res.data.data.personal_information
        oldCareerList.value = res.data.data?.careers?.old_careers.map((v) => ({
          ...v,
          experience: getDatePeriod(v.from_date, v.to_date),
        }))
        newCareerList.value = res.data.data?.careers?.new_careers
        medList.value = res.data.data?.meds
        relativeList.value = res.data.data?.relatives
        vacationList.value = res.data.data?.vacations
        incentiveList.value = res.data.data?.incentives
        punishmentList.value = res.data.data?.disciplinary_actions
      })
      .finally(() => {
        personalInfoLoading.value = false
      })
  }

  return {
    account,
    profileLoading,
    fetchProfile,

    personalList,
    personalLoading,
    fetchPersonalList,

    personalInfo,
    personalInfoLoading,
    activePath,
    oldCareerList,
    newCareerList,
    medList,
    relativeList,
    vacationList,
    incentiveList,
    punishmentList,
    fetchPersonalInfo,
  }
})
