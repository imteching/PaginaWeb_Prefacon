document.addEventListener('DOMContentLoaded', function () {
  let imagenes = [
    {img: '/recursos/3_pre_art/balaustres/10_balaustre_62cm_3.jpg'},
    {img: '/recursos/3_pre_art/balaustres/10_balaustre_62cm_2.jpg'},
    {img: '/recursos/3_pre_art/balaustres/1_balaustre_30cm_3.jpg'},
    {img: '/recursos/4_proy/balaustre_30cm.jpg'},
    {img: '/recursos/3_pre_art/balaustres/1_balaustre_30cm_2.jpg'},
    {img: '/recursos/3_pre_art/balaustres/2_balaustre_girasol_3.jpg'},
    {img: '/recursos/3_pre_art/balaustres/3_balaustre_43cm_1.jpg'},
    {img: '/recursos/3_pre_art/balaustres/3_balaustre_43cm_2.jpg'},
    {img: '/recursos/3_pre_art/balaustres/4_balaustre_trenza_45cm_2.jpg'},
    {img: '/recursos/3_pre_art/balaustres/4_balaustre_trenza_45cm_3.jpg'},
    {img: '/recursos/3_pre_art/balaustres/9_balaustre_liso_58cm.jpg'},
    {img: '/recursos/3_pre_art/balaustres/11_balaustre_europeo_1.jpg'},
    {img: '/recursos/3_pre_art/balaustres/11_balaustre_europeo_2.jpg'},
    {img: '/recursos/3_pre_art/balaustres/11_balaustre_europeo_3.jpg'},
    {img: '/recursos/3_pre_art/balaustres/11_balaustre_europeo_4.jpg'},
    {img: '/recursos/4_proy/balaustre_europeo_1.jpg'},
    {img: '/recursos/3_pre_art/balaustres/13_balaustre_70cm.jpg'},
    {img: '/recursos/3_pre_art/balaustres/13_balaustre_70cm_2.jpg'},
    {img: '/recursos/3_pre_art/balaustres/14_balaustre_espiga_70cm_2.jpeg'},
    {img: '/recursos/3_pre_art/balaustres/15_balaustre_trenza_70cm_2.jpg'},
    {img: '/recursos/3_pre_art/balaustres/15_balaustre_trenza_70cm_3.jpg'},
    {img: '/recursos/3_pre_art/balaustres/15_balaustre_trenza_70cm_4.jpg'},
    {img: '/recursos/3_pre_art/balaustres/16_balaustre_girasol_72cm_2.jpg'},
    {img: '/recursos/3_pre_art/balaustres/16_balaustre_girasol_72cm_4.jpg'},
    {img: '/recursos/3_pre_art/balaustres/16_balaustre_girasol_72cm_5.jpg'},
    {img: '/recursos/4_proy/balaustre_80cm_1.jpg'},
    {img: '/recursos/4_proy/balaustre_80cm_2.jpg'},
    {img: '/recursos/4_proy/balaustre_80cm_3.jpg'},
    {img: '/recursos/3_pre_art/balaustres/19_balaustre_torneado_80cm_1.jpg'},
    {img: '/recursos/4_proy/balaustre_torneado_1.jpg'},
    {img: '/recursos/3_pre_art/balaustres/19_balaustre_torneado_80cm_2.jpg'},
    {img: '/recursos/3_pre_art/balaustres/19_balaustre_torneado_80cm_3.jpg'},
    {img: '/recursos/3_pre_art/balaustres/19_balaustre_torneado_80cm_4.jpeg'},
    {img: '/recursos/3_pre_art/balaustres/20_balaustre_ganso_84cm_2.jpg'},
    {img: '/recursos/3_pre_art/balaustres/20_balaustre_ganso_84cm_3.jpg'},
    {img: '/recursos/4_proy/balaustre_ganso_1.jpg'},
    {img: '/recursos/2_pre_urb/bancas/7_banca_medialuna.jpg'},
    {img: '/recursos/2_pre_urb/bancas/8_butaco_cuadrado_3.jpg'},
    {img: '/recursos/2_pre_urb/bancas/8_butaco_cuadrado_4.jpg'},
    {img: '/recursos/2_pre_urb/bancas/10_banca_monolitica_proy.jpg'},
    {img: '/recursos/4_proy/banca_parque_1.jpg'},
    {img: '/recursos/4_proy/bebedero_pajaros.jpg'},
    {img: '/recursos/2_pre_urb/fuentes/fuente_1.jpg'},
    {img: '/recursos/4_proy/fuente_1.jpg'},
    {img: '/recursos/2_pre_urb/jardineras/1_jardinera_geometrica.jpg'},
    {img: '/recursos/2_pre_urb/jardineras/2_jardinera_jarron.jpg'},
    {img: '/recursos/4_proy/jardinera_abusardada_1.jpg'},
    {img: '/recursos/4_proy/jardinera_acanalada_1.jpg'},
    {img: '/recursos/4_proy/jardinera_acanalada_2.jpg'},
    {img: '/recursos/4_proy/jardinera_acanalada_3.jpg'},
    {img: '/recursos/4_proy/jardinera_acanalada_4.jpg'},
    {img: '/recursos/4_proy/jardinera_acanalada_5.jpg'},
    {img: '/recursos/4_proy/jardinera_buda_1.jpg'},
    {img: '/recursos/4_proy/jardinera_chocolatera_1.jpg'},
    {img: '/recursos/4_proy/jardinera_chocolatera_2.jpg'},
    {img: '/recursos/4_proy/jardinera_cilindrica_1.jpg'},
    {img: '/recursos/4_proy/jardinera_cilindrica_2.jpg'},
    {img: '/recursos/4_proy/jardinera_cilindrica_3.jpg'},
    {img: '/recursos/4_proy/jardinera_conica.jpg'},
    {img: '/recursos/4_proy/jardinera_conica_figuras.jpg'},
    {img: '/recursos/4_proy/jardinera_conica_lisa_1.jpg'},
    {img: '/recursos/4_proy/jardinera_conica_lisa_2.jpg'},
    {img: '/recursos/4_proy/jardinera_copa_grande_cb_1.jpg'},
    {img: '/recursos/4_proy/jardinera_copa_grande_cb_2.jpg'},
    {img: '/recursos/4_proy/jardinera_copa_grande_cb_3.jpg'},
    {img: '/recursos/4_proy/jardinera_cuadrada_1.jpg'},
    {img: '/recursos/4_proy/jardinera_cuadrada_2.jpg'},
    {img: '/recursos/4_proy/jardinera_cuadrada_3.jpg'},
    {img: '/recursos/4_proy/jardinera_cuadrada_4.jpg'},
    {img: '/recursos/4_proy/jardinera_cuadrada_5.jpg'},
    {img: '/recursos/4_proy/jardinera_cuadrada_6.jpg'},
    {img: '/recursos/4_proy/jardinera_cuadrada_7.jpg'},
    {img: '/recursos/4_proy/jardinera_cuadrada_8.jpg'},
    {img: '/recursos/4_proy/jardinera_esferica_1.jpg'},
    {img: '/recursos/4_proy/jardinera_nido_rayada_1.jpg'},
    {img: '/recursos/4_proy/jardinera_nido_rayada_2.jpg'},
    {img: '/recursos/4_proy/jardinera_rattan_1.jpg'},
    {img: '/recursos/4_proy/jardinera_rattan_2.jpg'},
    {img: '/recursos/4_proy/jardinera_rattan_3.jpg'},
    {img: '/recursos/4_proy/jardinera_rattan_4.jpg'},
    {img: '/recursos/4_proy/jardinera_rattan_5.jpg'},
    {img: '/recursos/4_proy/jardinera_rattan_6.jpg'},
    {img: '/recursos/4_proy/jardinera_rattan_7.jpg'},
    {img: '/recursos/4_proy/jardinera_rectangular_1.jpg'},
    {img: '/recursos/4_proy/jardinera_rectangular_2.jpg'},
    {img: '/recursos/4_proy/jardinera_rectangular_3.jpg'},
    {img: '/recursos/4_proy/jardinera_rectangular_4.jpg'},
    {img: '/recursos/4_proy/jardinera_rectangular_5.jpg'},
    {img: '/recursos/4_proy/jardinera_rectangular_6.jpg'},
    {img: '/recursos/4_proy/jardinera_rectangular_7.jpg'},
    {img: '/recursos/4_proy/jardinera_rectangular_8.jpg'},
    {img: '/recursos/4_proy/jardinera_rectangular_9.jpg'},
    {img: '/recursos/4_proy/jardinera_rectangular_10.jpg'},
    {img: '/recursos/4_proy/jardinera_rectangular_11.jpg'},
    {img: '/recursos/4_proy/jardinera_rectangular_12.jpg'},
    {img: '/recursos/4_proy/jardinera_rectangular_13.jpg'},
    {img: '/recursos/4_proy/jardinera_uvas.jpg'},
    {img: '/recursos/4_proy/juegodemesa_1.jpg'},
    {img: '/recursos/4_proy/juegodemesa_2.jpg'},
    {img: '/recursos/4_proy/paso_circular_1.jpg'},
    {img: '/recursos/4_proy/paso_cuadrado_1.jpg'},
    {img: '/recursos/4_proy/paso_cuadrado_2.jpg'},
    {img: '/recursos/4_proy/paso_rectangular_1.jpg'},
    {img: '/recursos/4_proy/paso_rectangular_2.jpg'},
    {img: '/recursos/4_proy/paso_rectangular_3.jpg'},
    {img: '/recursos/4_proy/paso_rectangular_4.jpg'},
    {img: '/recursos/4_proy/paso_tortuga.jpg'},
    {img: '/recursos/4_proy/rejilla_1.jpg'},
    {img: '/recursos/4_proy/rejilla_2.jpg'},
    {img: '/recursos/4_proy/titulo.jpg'},
    {img: '/recursos/4_proy/topellantas.jpg'},
  ]
  let contador = 0
  const contenedor = document.querySelector('.slideshow')
  const overlay = document.querySelector('.overlay')
  const galeria_imagenes = document.querySelectorAll('.container-fluid img')
  const img_slideshow = document.querySelector('.slideshow img')

  contenedor.addEventListener('click', function (event) {
    let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img = contenedor.querySelector('img'),
        tgt = event.target

        if (tgt == atras) {
          if (contador > 0) {
            img.src = imagenes[contador - 1].img
            contador--
          } else {
          img.src = imagenes[imagenes.length - 1].img
          contador = imagenes.length - 1
        }
        } else if (tgt == adelante) {
          if (contador < imagenes.length - 1) {
            img.src = imagenes[contador + 1].img
            contador++
          } else {
            img.src = imagenes[0].img
            contador = 0
          }
        }
  })
  Array.from(galeria_imagenes).forEach(img => {
    img.addEventListener('click', event => {
      const imagen_seleccionada = +event.target.dataset.imgMostrar
      img_slideshow.src = imagenes[imagen_seleccionada].img
      contador = imagen_seleccionada
      overlay.style.opacity = 1
      overlay.style.visibility = 'visible'
    })
  })
  document.querySelector('.btn-cerrar').addEventListener('click', () => {
    overlay.style.opacity = 0
    overlay.style.visibility = 'hidden'
  })
})