<template>
  <NavTimeline>
    <template #timelineitem>
      <NavTimelineItem
        v-for="(work, index) in workplaces"
        :-index="index"
        :company-name="work.companyName"
        :job-name="work.jobName"
        :starts-on="work.startsOn"
        :ends-on="work.endsOn"
        :project-name="work.projectName"
      />
    </template>
  </NavTimeline>
</template>

<script lang="ts" setup>
  const workplaces = [
    {
      jobName: "Specialist FrontEnd Developer, Design Technologist & DesignOps",
      companyName: "Philips",
      companyLogo: null,
      startsOn: "Jun 2022",
      endsOn: "Nov 2024",
      projectName: "",
    },
    {
      jobName: "Senior FrontEnd Developer & Product Designer",
      companyName: "Mercedes Benz Bank (via Capgemini)",
      companyLogo: null,
      startsOn: "Jun 2022",
      endsOn: "Nov 2022",
      projectName: "",
    },
    {
      jobName: "Senior FrontEnd Developer",
      companyName: "OWSE - Objects Web & Software Engineering",
      companyLogo: null,
      startsOn: "Apr 2021",
      endsOn: "Jan 2023",
      projectName: "",
    },
    {
      jobName: "Senior FrontEnd Developer & Product Designer",
      companyName: "Bradesco (via Capgemini)",
      companyLogo: null,
      startsOn: "May 2021",
      endsOn: "Jun 2022",
      projectName: "",
    },
    {
      jobName: "Lead FrontEnd Developer & Product Designer",
      companyName: "SAI Global",
      companyLogo: null,
      startsOn: "Jan 2017",
      endsOn: "Apr 2020",
      projectName: "",
    },
    {
      jobName: "UI/UX Designer & FrontEnd Developer",
      companyName: "Modulo Security Solutions",
      companyLogo: null,
      startsOn: "Oct 2012",
      endsOn: "Dec 2016",
      projectName: "",
    },
  ];
</script>

<style lang="scss"></style>
