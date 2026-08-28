import { notFound } from "next/navigation";
import MemberProfile from "@/components/MemberProfile";
import { allMembers, getMember } from "@/lib/team";

export function generateStaticParams() {
  return allMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getMember(slug);
  return {
    title: member
      ? `${member.name} | PDIB`
      : "Team | PDIB",
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) notFound();
  return <MemberProfile member={member} />;
}
