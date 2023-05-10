import MenuItem from './MenuItem';

const Menu = () => {
  const links = [
    {
      id: 0,
      title: 'First',
    },
    {
      id: 1,
      title: 'Second',
    },
    { id: 2,
      title: 'Some third text',
    }
  ]
  return (
    <menu class="flex justify-center py-6 px-4 gap-8">
        {links.map((item) => (
          <MenuItem key={item.id} title={item.title} />
        ))}
    </menu>
  );
};

export default Menu;
