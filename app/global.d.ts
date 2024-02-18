declare namespace JSX {
    interface IntrinsicElements {
      // Ajoutez des interfaces pour les éléments JSX que vous utilisez dans votre application
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
      // Ajoutez d'autres interfaces au besoin
    }
  }