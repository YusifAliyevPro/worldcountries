import Link from "next/link";
import Image from "next/image";
import continentTranslations from "../lib/continents";

export default function Countries({ countries, page }) {
  const startIndex = (page - 1) * 42;
  const endIndex = startIndex + 42;
  const sortedCountries =
    countries.status !== 404
      ? countries
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .slice(startIndex, endIndex)
      : [];

  return (
    <div className="justify-content-center mx-4 flex flex-wrap items-center justify-center gap-x-10">
      {sortedCountries.map((country, index) => (
        <Link
          key={index}
          href={`/countries/${country.cca3}`}
          className="justify-content-center transition-transform duration-300 ease-in-out hover:scale-110 relative mt-10 inline-block w-[325px] select-none items-center justify-center rounded-xl bg-gray-200 text-center"
        >
          <div className="relative">
            <Image
              src={country.flags.svg}
              height={180}
              width={325}
              alt={country.flags.alt}
              className="object-cover h-[185px] w-full rounded-t-md"
            />
          </div>
          <p className="text-black truncate mr-6 text-left ml-8 font-bold text-2xl my-3">
            {country.name.common}
          </p>
          <p className="text-slate-900 text-left ml-8  text-md my-3">
            <span className="font-bold">Capital: </span> {country.capital}
          </p>
          <p className="text-slate-900 text-left ml-8  text-md my-3">
            <span className="font-bold">Region: </span> {country.region}
          </p>
          <p className="text-slate-900 text-left ml-8  text-md my-3">
            <span className="font-bold">Population: </span>{" "}
            {country.population.toLocaleString("en")}
          </p>
        </Link>
      ))}
    </div>
  );
}
