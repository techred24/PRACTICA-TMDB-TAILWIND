

interface SubmenuProps {
    submenuItems: string[],
    styles: string,
    visible?: boolean
    position?: {
        top: string,
        left: string
    }
}
export const Submenu: React.FC<SubmenuProps> = ({ submenuItems, styles }) => {
  return (
    // <div className="hidden group-hover:block absolute top-full left-0 z-[1000]" style={{ display: visible ? 'block' : 'none', ...position }}>
    <div className={styles}>
        <ul className="p-0 m-0 list-none">
            {
                submenuItems.map((submenuItem, index) => (
                    <li key={index} className="font-arial text-[17px] mb-[17px] cursor-pointer whitespace-nowrap last:mb-0">{submenuItem}</li>
                ))
            }
        </ul>
    </div>
  );
};
