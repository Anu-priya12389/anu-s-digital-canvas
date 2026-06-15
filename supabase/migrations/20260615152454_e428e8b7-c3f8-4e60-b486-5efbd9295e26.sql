
CREATE POLICY "Public read project images"
ON storage.objects FOR SELECT
USING (bucket_id = 'project-images');

CREATE POLICY "Admins manage project images"
ON storage.objects FOR ALL
TO authenticated
USING (bucket_id = 'project-images' AND public.has_role(auth.uid(), 'admin'))
WITH CHECK (bucket_id = 'project-images' AND public.has_role(auth.uid(), 'admin'));
