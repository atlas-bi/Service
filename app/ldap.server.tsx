import type { User } from '@prisma/client';
import { authenticate } from 'ldap-authentication';
import { updateUserProps } from '~/models/user.server';

export type { User } from '@prisma/client';

export async function verifyLogin(email: User['email'], password: string) {
  // first login with ldap

  const options = {
    ldapOpts: {
      url: process.env.LDAP_HOST, //'ldap://ldap.forumsys.com',
      // tlsOptions: { rejectUnauthorized: false }
    },
    adminDn: process.env.LDAP_USERNAME,
    adminPassword: process.env.LDAP_PASSWORD,
    userPassword: password,
    userSearchBase: process.env.LDAP_BASE_DN,
    usernameAttribute: process.env.LDAP_EMAIL_FIELD,
    username: email,
    groupsSearchBase: process.env.LDAP_BASE_DN,
    groupClass: process.env.LDAP_GROUP_CLASS,
    // groupMemberAttribute: process.env.LDAP_GROUP_NAME,
    // starttls: process.env.LDAP_START_TLS,
  };

  const ldapUser = await authenticate(options);
  if (!ldapUser) {
    return null;
  }

  type Group = {
    cn: string;
    [key: string]: string;
  };

  // update user info
  return updateUserProps(
    email,
    process.env.LDAP_FIRSTNAME
      ? ldapUser[process.env.LDAP_FIRSTNAME]
      : undefined,
    process.env.LDAP_LASTNAME ? ldapUser[process.env.LDAP_LASTNAME] : undefined,
    ldapUser.groups?.map((group: Group) => group.cn),
  );
}
