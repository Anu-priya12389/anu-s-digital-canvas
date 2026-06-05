
REVOKE EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) FROM PUBLIC, anon, authenticated;

DROP POLICY "Anyone can submit contact" ON public.contacts;
CREATE POLICY "Anyone can submit contact" ON public.contacts
  FOR INSERT
  WITH CHECK (
    char_length(name) BETWEEN 1 AND 200
    AND char_length(email) BETWEEN 3 AND 320
    AND char_length(message) BETWEEN 1 AND 5000
  );
