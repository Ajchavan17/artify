import Link from "next/link";

interface Breadcrumb {
  id: number;
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <ol className="flex items-center mt-5">
      {breadcrumbs.map((breadcrumb, i) => (
        <li key={breadcrumb.href}>
          <div className="flex items-center text-sm">
            <Link
              href={breadcrumb.href}
              className="font-medium text-sm text-muted-foreground hover:text-gray-900"
            >
              {breadcrumb.name}
            </Link>
            {i !== breadcrumbs.length - 1 ? (
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Breadcrumbs;
