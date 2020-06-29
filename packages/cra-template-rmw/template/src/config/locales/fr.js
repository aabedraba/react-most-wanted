import { defineMessages } from 'react-intl'

const messages = defineMessages({
  app_name: 'React Most Wanted',
  dashboard: 'Tableau de bord',
  about: 'À propos',
  page_not_found_demo: 'Page non trouvée démo',
  '404': '404',
  warning_404_message: '404 Page non trouvée',
  warning_404_description:
    'Nous sommes désolés mais la page que vous recherchez n\'existe pas.',
  settings: 'Réglages',
  language: 'Langue',
  theme: 'Thème',
  responsive: 'Responsive',
  en: 'Anglais',
  de: 'Allemand',
  bs: 'Bosniaque',
  ru: 'Russe',
  es: 'Espagnol',
  fr: 'Français',
  pt: 'Português',
  dark: 'Sombre',
  light: 'Clair',
  ics: 'ICS',
  sign_out: 'Déconnexion',
  sign_in: 'Se connecter',
  sign_up: 'S\'inscrire',
  sign_in_with_google: 'Connectez-vous avec Google',
  sign_in_with_facebook: 'Connectez-vous avec Facebook',
  sign_in_with_twitter: 'Connectez-vous avec Twitter',
  sign_in_with_github: 'Connectez-vous avec Github',
  'link_with_google.com': 'Lier avec Google',
  'link_with_facebook.com': 'Lier avec Facebook',
  'link_with_twitter.com': 'Lier avec Twitter',
  'link_with_github.com': 'Lier avec Github',
  my_account: 'Mon compte',
  name: 'Nom',
  email: 'Email',
  password: 'Mot de passe',
  new_password: 'Nouveau mot de passe',
  confirm_password: 'Confirmez le mot de passe',
  forgort_password: 'Mot de passe oublié?',
  reset_password: 'Réinitialiser le mot de passe',
  change_password: 'Changer le mot de passe',
  change_photo: 'Changer la photo',
  change_email: 'Changer l\'e-mail',
  reset_password_hint: 'Entrer votre Email',
  save: 'Sauvegarder',
  delete_account: 'Supprimer le compte',
  select_file: 'Choisir le dossier',
  cancel: 'Annuler',
  submit: 'Soumettre',
  delete: 'Supprimer',
  ok: 'OK',
  delete_account_dialog_title: 'Supprimer le compte?',
  delete_account_dialog_message:
    'Votre compte sera supprimé et vous perdrez toutes vos données!',
  email_not_verified: 'L\'email n\'est pas verifié!',
  email_verified: 'L\'e-mail est vérifié',
  send_verification_email: 'Envoyer email de vérification',
  send_verification_email_again: 'Renvoyer l\'e-mail de vérification',
  tasks: 'Tâches',
  create_task: 'Créer une tâche',
  edit_task: 'Modifier la tâche',
  users: 'Utilisateurs',
  edit: 'Éditer',
  online: 'En ligne',
  offline: 'Hors ligne',
  no_connection_warning: 'Pas de connection!',
  title_label: 'Titre',
  title_hint: 'Entrez le titre',
  no_connection: 'Pas de connection',
  delete_task_title: 'Supprimer la tâche?',
  delete_task_message: 'La tâche sera supprimée!',
  error: 'Erreur!',
  companies: 'Entreprises',
  create_company: 'Créer une entreprise',
  edit_company: 'Modifier une entreprise',
  delete_company_title: 'Supprimer une entreprise?',
  delete_company_message: 'L\'entreprise sera supprimée!',
  full_name_label: 'Nom complet',
  full_name_hint: 'Entrez le nom complet',
  vat_label: 'UID',
  vat_hint: 'Entrez l\'UID',
  color_label: 'Couleur',
  dress_label: 'Taille',
  amber_label: 'Ambre',
  green_label: 'Vert',
  blue_label: 'Bleu',
  gray_label: 'Gris',
  black_label: 'Noir',
  description_label: 'Description',
  description_hint: 'Entrez la description',
  name_label: 'Nom',
  name_hint: 'Entrez le nom',
  public_chats: 'Chat public',
  delete_message_title: 'Supprimer le message?',
  delete_message_message: 'Le message sera supprimé!',
  users_count_title: '{number} Utilisateurs',
  user_registrationg_graph_label: 'Inscriptions d\'utilisateurs',
  required: 'Obligatoire',
  facebook: 'Facebook',
  github: 'Github',
  twitter: 'Twitter',
  phone: 'Téléphone',
  google: 'Google',
  facebook_color: '#303F9F',
  github_color: '#263238',
  twitter_color: '#36A2EB',
  phone_color: '#90A4AE',
  google_color: '#EA4335',
  password_color: '#4CAF50',
  chats: 'Chats',
  write_message_hint: 'Écrire un message...',
  load_more_label: 'Plus...',
  my_location: 'Ma position',
  select_user: 'Sélectionnez un Utilisateur',
  operator_like_label: 'Comme',
  operator_notlike_label: 'Pas comme',
  operator_equal_label: 'Égal',
  operator_notequal_label: 'Inégal',
  operator_novalue_label: 'Aucune valeur',
  administration: 'Administration',
  roles: 'Rôles',
  grants: 'Autorisations',
  private: 'Privé',
  public: 'Public',
  grant_read_companies: 'Lire les entreprises',
  grant_create_company: 'Créer une entreprise',
  grant_edit_company: 'Modifier une entreprise',
  grant_delete_company: 'Supprimer une entreprise',
  is_admin_label: 'Administrateur',
  predefined_messages: 'Messages prédéfinis',
  delete_predefined_chat_message_title: 'Supprimer le message prédéfini?',
  delete_predefined_chat_message_message: 'Le message prédéfini sera supprimé!',
  select_field: 'Sélectionner un champ',
  sorting: 'Tri',
  filters: 'Filtres',
  filter: 'Filtre',
  add_filter: 'Ajouter un filtre',
  delete_filter: 'Supprimer le filtre',
  change_sort_orientation: 'Changer d\'orientation',
  enable_case_sensitivity: 'Sensibilité à la casse',
  hint_autocomplete: 'Sélectionner',
  enter_query_text: 'Entrez du texte',
  email_label: 'Email',
  close_filter: 'Fermer le filtre',
  open_filter: 'Ouvrir le filtre',
  select_operator: 'Sélectionnez un opérateur',
  not_match_found: 'Pas de résultat trouvé',
  edit_user: 'Modifier l\'utilisateur',
  firestore: 'Firestore',
  hot_dog_status: 'Statut de hot-dog',
  user_label_search: 'Rechercher un utilisateur',
  document: 'Document',
  collection: 'Collection',
  infinitelist: 'Infinitelist',
  workers_hint: 'Inscrire les employés',
  workers_label: 'Employé',
  worth_hint: 'Entrez une valeur',
  worth_label: 'Valeur',
})

export default messages
