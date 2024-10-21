<template>
  <UPageGrid>
    <WorkCard
      v-for="(work, index) in workplaces"
      :key="`${work.companyName}-${index}`"
      :company-name="work.companyName"
      :job-name="work.jobName"
      :starts-on="work.startsOn"
      :ends-on="work.endsOn"
      :project-name="work.projectName"
    />
  </UPageGrid>
</template>

<script lang="ts" setup>
  const workplaces = [
    {
      jobName: "Specialist FrontEnd Developer, Design Technologist & DesignOps",
      companyName: "Philips",
      startsOn: "Jun 2022",
      endsOn: "Nov 2024",
      projectName: "",
    },
    {
      jobName: "Senior FrontEnd Developer & Product Designer",
      companyName: "Mercedes Benz Bank (via Capgemini)",
      startsOn: "Jun 2022",
      endsOn: "Nov 2022",
      projectName: "",
    },
    {
      jobName: "Senior FrontEnd Developer",
      companyName: "OWSE - Objects Web & Software Engineering",
      startsOn: "Apr 2021",
      endsOn: "Jan 2023",
      projectName: "",
    },
    {
      jobName: "Senior FrontEnd Developer & Product Designer",
      companyName: "Bradesco (via Capgemini)",
      startsOn: "May 2021",
      endsOn: "Jun 2022",
      projectName: "",
    },
    {
      jobName: "Lead FrontEnd Developer & Product Designer",
      companyName: "SAI Global",
      startsOn: "Jan 2017",
      endsOn: "Apr 2020",
      projectName: "",
    },
    {
      jobName: "UI/UX Designer & FrontEnd Developer",
      companyName: "Modulo Security Solutions",
      startsOn: "Oct 2012",
      endsOn: "Dec 2016",
      projectName: "",
    },
  ];
</script>

<style></style>
