import Link from "next/link";
import { Collection, CollectionRow, NotionRenderer } from "react-notion-x";

export default function Render({ recordMap }) {
  return (
    <NotionRenderer
      components={{
        collection: Collection,
        collectionRow: CollectionRow,
        pageLink: ({
          href,
          as,
          passHref,
          prefetch,
          replace,
          scroll,
          shallow,
          locale,
          ...props
        }) => (
          <Link
            href={href}
            as={as}
            passHref={passHref}
            prefetch={prefetch}
            replace={replace}
            scroll={scroll}
            shallow={shallow}
            locale={locale}
          >
            <a {...props} />
          </Link>
        ),
      }}
      recordMap={recordMap}
      fullPage={true}
      darkMode={true}
    />
  );
}
