import React from 'react';

import Feed from '../Feed';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Rafael Sousa</h1>
        <h2>@rafaelsousa86</h2>

        <p>
          Developer at <a href="https://sistemas.secad.to.gov.br/">@Secad</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Tocantins, Brazil
          </li>

          <li>
            <CakeIcon />
            Nascido(a) em 17 de Julho de 1986
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>1</strong>
          </span>

          <span>
            <strong>0 </strong> seguidores 
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;