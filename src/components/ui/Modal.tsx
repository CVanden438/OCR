import * as AlertDialog from '@radix-ui/react-alert-dialog';
import styles from './Modal.module.scss';
interface ModalProps {
  triggerText: string;
  title: string;
  description: string;
  cancelText: string;
  actionText: string;
  cancel?: () => void;
  action?: () => void;
  defaultOpen?: boolean;
}

const Modal = ({
  triggerText,
  title,
  description,
  cancelText,
  actionText,
  cancel,
  action,
  defaultOpen = false,
}: ModalProps) => {
  return (
    <AlertDialog.Root defaultOpen={defaultOpen}>
      {!defaultOpen && (
        <AlertDialog.Trigger className={styles.trigger}>
          {triggerText}
        </AlertDialog.Trigger>
      )}
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.overlay} />
        <AlertDialog.Content className={styles.content}>
          <AlertDialog.Title className={styles.title}>
            {title}
          </AlertDialog.Title>
          <AlertDialog.Description className={styles.description}>
            {description}
          </AlertDialog.Description>
          <div className={styles.buttonWrapper}>
            <AlertDialog.Cancel onClick={cancel} className={styles.cancel}>
              {cancelText}
            </AlertDialog.Cancel>
            <AlertDialog.Action onClick={action} className={styles.action}>
              {actionText}
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default Modal;
