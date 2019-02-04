import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import {FileItem} from '../models/file-items';
@Injectable({providedIn: 'root'})
export class CargaImagenesService {
  private CARPETA_IMAGENES = 'img';
  constructor(private db: AngularFirestore) {}

  private guardarImagen(imagen: {nombre: string, url: string}) {
    console.log('guardando final ');
    this.db.collection(`/${this.CARPETA_IMAGENES}`).add(imagen);
  }
  cargarImagenesFirebase(imagenes: FileItem[]) {
    // console.log(imagenes)

    const storageRef = firebase.storage().ref();

    for (const item of imagenes) {
      item.estaSubiendo = true;
      console.log(item.progreso)
      if (item.progreso >= 100) {
        continue;
      }
      console.log('antes del upload');
      const uploadTask: firebase.storage.UploadTask =
          storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`)
              .put(item.archivo);
      console.log('por subir');
      uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot: firebase.storage.UploadTaskSnapshot) => {
            console.log('subiendo')
            item.progreso =
                snapshot.bytesTransferred / snapshot.totalBytes * 100;
          },
          (error) => {
            console.error('error al subir', error);
          },
          () => {
            console.log('Imagen cargada correctamente');
            uploadTask.snapshot.ref.getDownloadURL().then((downloadUrl) => {
              item.url = downloadUrl;
              console.log('download url', item.url)
              item.estaSubiendo = false;
              this.guardarImagen({nombre: item.nombreArchivo, url: item.url});
            }, (error) => {console.log(error)});
          })
      console.log('termine')
    }
  }
}
