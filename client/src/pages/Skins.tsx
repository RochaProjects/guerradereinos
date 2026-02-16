import SkinGallery from "@/components/SkinGallery";
import WikiLayout from "@/components/WikiLayout";

export default function Skins() {
  return (
    <WikiLayout
      title="Skins do Servidor"
      subtitle="As skins oficiais continuam como identidade visual principal dos reinos e dos jogadores neutros."
    >
      <SkinGallery />
    </WikiLayout>
  );
}
