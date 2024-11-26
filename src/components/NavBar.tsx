'use client';

import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';

const NavBar: React.FC = () => {
  const [value, setValue] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%' }}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          label="Domov"
          icon={<HomeOutlinedIcon />}
          onClick={() => handleNavigation('/')}
          showLabel
        />
        <BottomNavigationAction
          label="Príspevky"
          icon={<AddBoxOutlinedIcon />}
          onClick={() => handleNavigation('/pridat')}
          showLabel
        />

        {session ? (
          <>
            <BottomNavigationAction
              label="Profil"
              icon={<AccountCircleOutlinedIcon />}
              onClick={() => handleNavigation('/profil')}
              showLabel
            />
            <BottomNavigationAction
              label="Odhlásenie"
              icon={<ExitToAppOutlinedIcon />}
              onClick={() => signOut()}
              showLabel
            />
          </>
        ) : (
          <>
            <BottomNavigationAction
              label="Registrácia"
              icon={<PersonAddOutlinedIcon />}
              onClick={() => signIn('google')}
              showLabel
            />
            <BottomNavigationAction
              label="Prihlásenie"
              icon={<LoginOutlinedIcon />}
              onClick={() => signIn('google')}
              showLabel
            />
          </>
        )}
      </BottomNavigation>
    </Box>
  );
};

export default NavBar;
