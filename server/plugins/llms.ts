import { profile, profileQuestions } from "../../lib/profile";
import { workplaces, projects, interfaces } from "../../lib/portfolio";

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("llms:generate:full", (_event, _options, contents) => {
    contents.push(
      `# ${profile.name}\n\n${profile.url}\n\n${profile.description}`,
      `## Specialties\n\n${profile.knowsAbout.join(", ")}.`,
      `## Profile questions\n\n${profileQuestions.map(({ question, answer }) => `### ${question}\n\n${answer}`).join("\n\n")}`,
      `## Work Experience\n\n${workplaces.map((work) => `### ${work.jobName}\n\n${work.companyName}\n\n${work.startsOn} - ${work.endsOn}`).join("\n\n")}`,
      ...[
        { title: "Projects", items: projects },
        { title: "Interfaces", items: interfaces },
      ].map(({ title, items }) => `## ${title}\n\n${items.map((item) => {
        const heading = item.url ? `### [${item.title}](${item.url})` : `### ${item.title}`;
        return item.description ? `${heading}\n\n${item.description}` : heading;
      }).join("\n\n")}`),
      `## Professional profiles and contact\n\nContact Adriano through LinkedIn.\n\n${profile.profiles.map(({ title, href }) => `- [${title}](${href})`).join("\n")}`,
    );
  });
});
