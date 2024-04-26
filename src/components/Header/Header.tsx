import WebsiteLogo from "src/assets/images/favicon.svg";

function Header() {
  return (
    <section className="flex gap-4 items-center text-3xl font-semibold p-4 w-[100%] tracking-tighter ps-8 bg-amber-300 text-neutral-900 border-4 border-solid border-b-neutral-600">
      <img src={WebsiteLogo} className="w-8 h-8" />
      Popular News Articles From NY Times
    </section>
  );
}

export default Header;
