/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderComponent } from '../astro_BaeoLqa4.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$2 = createAstro();
const $$RootLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RootLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-mdysn4oi> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body data-astro-cid-mdysn4oi> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/development/practices/astro/practice/src/layouts/RootLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$UserList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$UserList;
  const userList = await fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());
  return renderTemplate`${maybeRenderHead()}<div> <ul> ${userList.map((user) => renderTemplate`<li class="p-1"> <h2 class="font-bold">${user.name}</h2> <p> * ${user.email}</p> </li>`)} </ul> </div>`;
}, "D:/development/practices/astro/practice/src/components/UserList.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$User = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$User;
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, { "title": "Users" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-2"> <h1 class="text-4xl">User List</h1> ${renderComponent($$result2, "UserList", $$UserList, {})} </div> ` })}`;
}, "D:/development/practices/astro/practice/src/pages/user.astro", void 0);

const $$file = "D:/development/practices/astro/practice/src/pages/user.astro";
const $$url = "/user";

const user = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$User,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$RootLayout as $, user as u };
