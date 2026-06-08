import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const usePortfolio = () =>
  useQuery({
    queryKey: ["portfolio"],
    queryFn: async () => {
      const [profile, skills, education, certs, projects, internships, achievements] =
        await Promise.all([
          supabase
            .from("profiles")
            .select("*")
            .order("created_at", { ascending: false })
            .limit(1)
            .maybeSingle(),
          supabase.from("skills").select("*").order("created_at"),
          supabase.from("education").select("*").order("created_at"),
          supabase.from("certifications").select("*").order("created_at"),
          supabase.from("projects").select("*").order("created_at"),
          supabase.from("internships").select("*").order("created_at"),
          supabase.from("achievements").select("*").order("created_at"),
        ]);
      return {
        profile: profile.data,
        skills: skills.data ?? [],
        education: education.data ?? [],
        certifications: certs.data ?? [],
        projects: projects.data ?? [],
        internships: internships.data ?? [],
        achievements: achievements.data ?? [],
      };
    },
    staleTime: 60_000,
  });
