import { defineStore } from "pinia";
const API_URL = process.env.VUE_APP_API_URL;
import axios from 'axios';

export const useResumeStore = defineStore('resume', {
  state: () => ({
    fullname: '',
    birthday: '',
    lookingJob: true,
    courses: [],
    technologies: [],
  }),
  actions: {
    resumeResponse() {
      axios.get(`${API_URL}/api/resume?populate=*`)
        .then((response) => {
          const resumeData = response.data.data.attributes;
          this.fullname = resumeData.fullname;
          this.birthday = resumeData.birthday;
          this.lookingJob = resumeData.lookingJob;
          this.technologies = resumeData.technologies.data;
          this.courses = resumeData.courses.data;
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
});