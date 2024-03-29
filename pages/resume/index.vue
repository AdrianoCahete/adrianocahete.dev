<template>
  <section id="resume">
    <header class="resume-header">
      <section class="resume-personal">
        <section class="resume-author">
          {{ $config.appAuthor }}
        </section>
        <section class="resume-job">Design Technologist & DesignOps</section>
      </section>
      <section class="resume-contact">
        <section class="resume-item">Rio de Janeiro/Brazil</section>
        <section class="resume-item">me@adrianocahete.dev</section>
        <section class="resume-item">
          https://linkedin.com/in/adrianocahete
        </section>
        <section class="resume-item">https://github.com/AdrianoCahete</section>
        <section class="resume-item">https://adrianocahete.dev/</section>
      </section>
    </header>
    <section class="resume-content">
      <section class="resume-section">
        <h1>Objective</h1>
        <p>
          Develop and maintain integrity on interfaces for sites, software, and
          interactive systems as Product Designer and Design Technologist, and
          filling the gap between Designers and Developers.
        </p>
      </section>
      <section class="resume-section">
        <h1>Experience</h1>
        <Card
          animation-delay="0.1"
          title="Design Technologist & DesignOps"
          subtitle="Philips | Hero99 (Netherlands/Brazil)"
          info="Nov 2022 - Currently | Remote"
        />
        <!-- :items="[
            { name: 'Be the UI expert of the team on client\'s Design System' },
            {
              name: 'Worked closely with Product and Developer teams to design and document features for one of biggest banks in Brazil',
            },
            {
              name: 'Interfaced with other designers and developers to ensure coherent UI/UX across different products',
            },
          ]" -->
        <Card
          animation-delay="0.3"
          title="Product Designer & Design Technologist"
          subtitle="Bradesco | Capgemini (France/Brazil)"
          info="Mai 2021 - Nov 2022 | Remote"
          :items="[
            { name: 'Be the UI expert of the team on client\'s Design System' },
            {
              name: 'Worked closely with Product and Developer teams to design and document features for one of biggest banks in Brazil',
            },
            {
              name: 'Interfaced with other designers and developers to ensure coherent UI/UX across different products',
            },
          ]"
        />
        <Card
          animation-delay="0.7"
          title="Lead Product Designer & Design Technologist"
          subtitle="SAI Global (US/Netherlands)"
          info="Jan 2017 - Apr 2020 | Remote"
          :items="[
            {
              name: 'Developed highly interactive prototypes and shipped the same UIs on delivered product',
            },
            {
              name: 'Worked closely with Product Owners and developer team to design and document features for SAI360 Digital Risk & SAI360 BWise Vendor Risk Management',
            },
            {
              name: 'Interfaced with other designers and developers in different timezones to ensure coherent UI/UX across multiple different products with different technologies',
            },
            {
              name: 'Developed Style Guides for multiple different products and technologies',
            },
          ]"
          no-animation
        />
        <!--   -->
        <Card
          animation-delay="0.7"
          title="UI/UX Designer & FrontEnd Developer"
          subtitle="Modulo Security Solutions (Brazil)"
          info="Oct 2012 - Dec 2016 | Partially Remote"
          :items="[
            {
              name: 'Write modern, maintainable and performant code for Modulo Risk Manager',
            },
            {
              name: 'Proposed and implemented a solution to make UIs more alike to the designed ones',
            },
            {
              name: 'Worked with Rio\'s Department of Public Security stakeholders in Integrated Command & Control Center to bring a most efficient interface for 911 operators',
            },
            {
              name: 'Performed the layer between design and development, talking in the way that the developer understands',
            },
          ]"
          no-animation
        />
      </section>
      <section class="resume-section">
        <h1>Skills</h1>
        <listItem
          :items-col-left="[
            { name: 'Design for Desktop & Mobile' },
            {
              name: 'Working with remote and multi-cultural teams for the past ~5 years',
            },
            { name: 'Customer focused' },
            {
              name: 'Specialized to fulfill the gap between Designers and Developers',
            },
            { name: 'Worked with High Performance Teams' },
            { name: 'Knowledge in Developer Experience' },
            { name: 'HTML/CSS (and Stylus/Saas/Less)' },
            { name: 'Adobe Photoshop, Adobe XD, Sketch and Figma' },
            { name: 'Scrum / Kanban / Agile' },
            { name: 'Quality in mind' },
            { name: 'Git' },
            { name: 'Javascript (React, Vue/Nuxt, Node)' },
          ]"
        />
      </section>

      <section class="resume-section">
        <h1>Certifications</h1>
        <!-- Certifications & Courses -->
        <Card
          title="Microsoft Front End Web Development (DEV237x)"
          info="2019"
          no-animation
        />
      </section>
    </section>
    <footer class="resume-footer">
      <section class="resume-appInfo">
        Auto-generated by {{ $config.appAuthor }}'s portfolio @
        https://adrianocahete.dev/
      </section>
      <section class="resume-appVersion">
        {{ year }}.{{ month }} - v{{ $config.appVersion }}
      </section>
    </footer>
  </section>
</template>

<script>
import Card from "~/components/common/Card/simpleCard";
import listItem from "~/components/common/listItem";

export default {
  components: {
    Card,
    listItem,
  },

  layout: "resume",

  asyncData() {
    return {
      date: new Date(),
    };
  },

  head() {
    return {
      title: "Resume",
    };
  },
  computed: {
    year() {
      return this.date.getFullYear();
    },
    month() {
      return this.date.getMonth() + 1;
    },
  },
  created() {
    if (typeof this.date === "string") {
      this.date = new Date(this.date);
    }
  },
};
</script>

<style lang="scss" scoped>
// Sizes are in mm because it's a PDF

@media print {
  .resume-page {
    visibility: visible !important;
  }
}

.resume-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--navbarBgColor);
  color: #ffffff;
  background-attachment: fixed;
  background-size: 500% 500%;
  background-position: 0 50%;
  border-bottom: var(--navbarBorder);
  padding: 10mm;
  height: 50mm;

  .resume-author {
    font-size: 10mm;
    text-transform: uppercase;
  }

  .resume-job {
    font-size: 5mm;
  }

  .resume-contact {
    text-align: right;
    font-size: 4.2mm;
  }
}

.resume-content {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10mm 10mm 0 10mm;

  .resume-section {
    margin-bottom: 10mm;

    > h1 {
      font-size: 6mm;
      text-transform: uppercase;
    }
  }
}

.resume-footer {
  padding: 10mm;
  text-align: right;
  font-size: 1rem;
}

@media print {
  html,
  body {
    visibility: visible !important;
  }

  .resume-header {
    background-attachment: initial !important;
  }

  .resume-content,
  .resume-footer {
    background: #ffffff !important;
  }

  .resume-section {
    page-break-after: auto !important;
    page-break-inside: avoid !important;
  }
}
</style>
