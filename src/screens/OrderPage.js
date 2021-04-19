import { NavBtn, BtnLink } from '../components/Navbar/NavbarElements';

const stylingInFlex = {
  display: 'flex',
  justifyContent: 'center',
  padding: '10px',
};

const stylingOrderButton = {
  backgroundColor: '#de812b',
  textDecoration: 'none',
};

export default function OrderPage() {
  return (
    <div style={stylingInFlex}>
      <NavBtn>
        <BtnLink style={stylingOrderButton} to="/order/fav-pizza">
          Vos Pizzas Favoris
        </BtnLink>
      </NavBtn>
      <NavBtn>
        <BtnLink style={stylingOrderButton} to="/order/create-pizza">
          Créez votre pizza
        </BtnLink>
      </NavBtn>
      <NavBtn>
        <BtnLink style={stylingOrderButton} to="/order/pizza-list">
          Nos Pizzas
        </BtnLink>
      </NavBtn>
    </div>
  );
}
