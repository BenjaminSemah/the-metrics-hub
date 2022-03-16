import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ItemList from '../../components/ItemList/ItemList';
import NavItem from '../../components/Navbar/NavItem';

const SnpPage = () => {
  const data = useSelector((state) => state.snp);
  const navigate = useNavigate();

  return (
    <>
      <div className="snp--page">
        <NavItem
          onClick={() => navigate(-1)}
          title="Snp 500 details"
        />
        <Header value={data} />
        <div className="snp--details">
          <h2>SNP Stats</h2>
          <ItemList data={data} />
        </div>
      </div>
    </>
  );
};

export default SnpPage;
