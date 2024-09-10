const componentes = [
    {
      nombre: "Placa Madre",
      descripcion: "La placa madre es el componente principal de un ordenador, donde se conectan todos los demás componentes y periféricos.",
      partes: [
        {
          nombreParte: "Socket del Procesador",
          descripcion: "El socket del procesador es la ranura en la placa madre donde se instala el CPU.",
          categoria: "Conectores"
        },
        {
          nombreParte: "Ranuras de RAM",
          descripcion: "Las ranuras de RAM son los espacios donde se insertan los módulos de memoria RAM.",
          categoria: "Conectores"
        },
        {
          nombreParte: "Puertos PCI",
          descripcion: "Los puertos PCI permiten la instalación de tarjetas de expansión, como tarjetas gráficas o de sonido.",
          categoria: "Conectores"
        },
        {
          nombreParte: "Conectores SATA",
          descripcion: "Los conectores SATA se utilizan para conectar discos duros y unidades de estado sólido (SSD) a la placa madre.",
          categoria: "Conectores"
        },
        {
          nombreParte: "Chip de Audio",
          descripcion: "El chip de audio maneja el procesamiento y la salida de sonido desde la placa madre.",
          categoria: "Chips"
        },
        {
          nombreParte: "Chip BIOS/UEFI",
          descripcion: "El chip BIOS o UEFI contiene el firmware que inicializa el hardware del sistema durante el arranque.",
          categoria: "Chips"
        },
        {
          nombreParte: "Puertos USB",
          descripcion: "Los puertos USB permiten la conexión de dispositivos periféricos como teclados, ratones y unidades externas.",
          categoria: "Puertos"
        },
        {
          nombreParte: "Puertos de Video",
          descripcion: "Los puertos de video permiten la conexión de monitores y otros dispositivos de visualización.",
          categoria: "Puertos"
        },
        {
          nombreParte: "Puertos de Audio",
          descripcion: "Los puertos de audio permiten la conexión de dispositivos de entrada y salida de sonido, como altavoces y micrófonos.",
          categoria: "Puertos"
        },
        {
          nombreParte: "Pila",
          descripcion: "La pila en la placa madre mantiene la configuración del BIOS/UEFI y la hora del sistema cuando el ordenador está apagado.",
          categoria: "Componentes de Soporte"
        },
        {
          nombreParte: "Disipadores",
          descripcion: "Los disipadores ayudan a enfriar el procesador y otros componentes de la placa madre al disipar el calor generado.",
          categoria: "Componentes de Soporte"
        }
      ]
    }, 
    {
      nombre: "SSD",
      descripcion: "La unidad de estado sólido (SSD) es un dispositivo de almacenamiento que utiliza memoria flash para guardar datos, reemplazando los discos mecánicos de los discos duros tradicionales.",
      partes: [
        {
          nombreParte: "Memoria NAND",
          descripcion: "La memoria NAND es el tipo de memoria flash utilizada en los SSD para almacenar datos de manera no volátil.",
          categoria: "Almacenamiento"
        },
        {
          nombreParte: "Controlador",
          descripcion: "El controlador es el cerebro del SSD, encargado de gestionar la lectura, escritura y borrado de datos en la memoria NAND.",
          categoria: "Controladores"
        },
        {
          nombreParte: "DRAM Cache",
          descripcion: "El caché DRAM se utiliza para acelerar las operaciones de lectura y escritura temporales.",
          categoria: "Almacenamiento"
        },
        {
          nombreParte: "Interfaz SATA o NVMe",
          descripcion: "La interfaz SATA o NVMe conecta el SSD a la placa madre y define la velocidad de transferencia de datos.",
          categoria: "Conectores"
        }
      ]
    },
    {
      nombre: "RAM",
      descripcion: "La memoria RAM es un tipo de memoria volátil que se utiliza para almacenar datos temporales que la CPU necesita acceder rápidamente.",
      partes: [
        {
          nombreParte: "Módulos de Memoria",
          descripcion: "Los módulos de memoria RAM son las piezas físicas que contienen los chips de memoria y se instalan en la placa madre.",
          categoria: "Almacenamiento"
        },
        {
          nombreParte: "Chips de DRAM",
          descripcion: "Los chips de DRAM son los componentes en los módulos de RAM que almacenan datos de forma temporal mientras el sistema está en funcionamiento.",
          categoria: "Almacenamiento"
        },
        {
          nombreParte: "Contactos Dorados",
          descripcion: "Los contactos dorados permiten la transferencia de datos entre los módulos de RAM y la placa madre.",
          categoria: "Conectores"
        },
        {
          nombreParte: "PCB",
          descripcion: "El PCB (Placa de Circuito Impreso) es la estructura que conecta todos los chips y componentes del módulo de RAM.",
          categoria: "Estructura"
        }
      ]
    },
    {
      nombre: "HDD",
      descripcion: "El disco duro (HDD) es un dispositivo de almacenamiento magnético que utiliza discos giratorios para leer y escribir datos.",
      partes: [
        {
          nombreParte: "Plato",
          descripcion: "El plato es el disco giratorio dentro del HDD donde se almacenan los datos de manera magnética.",
          categoria: "Almacenamiento"
        },
        {
          nombreParte: "Cabezal de Lectura/Escritura",
          descripcion: "El cabezal de lectura/escritura es responsable de leer y escribir datos en el plato mientras gira.",
          categoria: "Lectura/Escritura"
        },
        {
          nombreParte: "Eje de Rotación",
          descripcion: "El eje de rotación permite que los platos giren a alta velocidad dentro del HDD.",
          categoria: "Mecánica"
        },
        {
          nombreParte: "Controlador",
          descripcion: "El controlador gestiona la lectura y escritura de datos en el HDD, así como la comunicación con la placa madre.",
          categoria: "Controladores"
        },
        {
          nombreParte: "Interfaz SATA",
          descripcion: "La interfaz SATA es el conector que permite que el HDD se comunique con la placa madre y otros componentes.",
          categoria: "Conectores"
        }
      ]
    },
    {
      nombre: "GPU",
      descripcion: "La GPU, o tarjeta gráfica, es responsable de renderizar gráficos y enviar imágenes a la pantalla. Es esencial para tareas gráficas intensivas como juegos y diseño 3D.",
      partes: [
        {
          nombreParte: "Chip Gráfico",
          descripcion: "El chip gráfico es el procesador central de la GPU que maneja cálculos de renderizado y procesamiento visual. Su capacidad se mide en núcleos CUDA (NVIDIA) o unidades de cómputo (AMD).",
          categoria: "Chips"
        },
        {
          nombreParte: "Memoria VRAM",
          descripcion: "La VRAM es la memoria dedicada de la GPU que almacena datos gráficos como texturas y mapas de bits. La cantidad y velocidad de VRAM (GDDR6 o GDDR6X) impactan en la resolución y detalle gráfico.",
          categoria: "Memoria"
        },
        {
          nombreParte: "Conectores de Energía",
          descripcion: "Los conectores de energía proporcionan el voltaje adicional necesario para que la GPU funcione correctamente. Algunas tarjetas de gama alta requieren conectores de 8 o incluso 12 pines.",
          categoria: "Conectores"
        },
        {
          nombreParte: "Puertos de Salida de Video",
          descripcion: "Puertos como HDMI, DisplayPort o DVI que permiten la conexión de uno o varios monitores. Algunos soportan resoluciones 8K y frecuencias de refresco de hasta 120 Hz.",
          categoria: "Puertos"
        },
        {
          nombreParte: "Ventiladores",
          descripcion: "Los ventiladores de la GPU mantienen temperaturas óptimas durante su uso intensivo. Algunos modelos incluyen tecnología de refrigeración líquida o pasiva.",
          categoria: "Componentes de Soporte"
        },
        {
          nombreParte: "Backplate",
          descripcion: "El backplate es una placa que cubre la parte trasera de la GPU, proporcionando refuerzo estructural y ayudando en la disipación de calor.",
          categoria: "Componentes de Soporte"
        }
      ]
    },
    {
      nombre: "CPU",
      descripcion: "El CPU, o procesador, es el cerebro del ordenador que realiza los cálculos y operaciones principales. Su rendimiento depende de la cantidad de núcleos, velocidad de reloj y tamaño de caché.",
      partes: [
        {
          nombreParte: "Núcleos",
          descripcion: "Los núcleos son las unidades de procesamiento que ejecutan las instrucciones de los programas. Los procesadores modernos pueden tener entre 4 y 16 núcleos o más.",
          categoria: "Chips"
        },
        {
          nombreParte: "Cache L1/L2/L3",
          descripcion: "La memoria cache almacena datos frecuentemente utilizados para acelerar el acceso. La cache L1 es la más rápida, seguida de L2 y L3, con tamaños que varían según el procesador.",
          categoria: "Memoria"
        },
        {
          nombreParte: "Socket",
          descripcion: "Es el conector que une el CPU con la placa madre. Ejemplos incluyen AM4 para AMD y LGA 1200 para Intel.",
          categoria: "Conectores"
        },
        {
          nombreParte: "Controlador de Memoria",
          descripcion: "El controlador de memoria integrado en el CPU gestiona el acceso a la RAM, afectando el rendimiento general del sistema.",
          categoria: "Chips"
        },
        {
          nombreParte: "Disipador de Calor",
          descripcion: "El disipador de calor es un componente esencial para evitar el sobrecalentamiento del CPU. Funciona absorbiendo y dispersando el calor generado durante el uso.",
          categoria: "Componentes de Soporte"
        },
        {
          nombreParte: "Overclocking",
          descripcion: "Algunos CPUs permiten ajustar la velocidad de reloj más allá de los valores predeterminados mediante overclocking, aumentando el rendimiento a costa de mayor consumo de energía y calor.",
          categoria: "Configuración"
        }
      ]
    },
    {
      nombre: "Fuente de Poder",
      descripcion: "La fuente de poder convierte la electricidad de corriente alterna (CA) en corriente continua (CC) para alimentar los componentes del ordenador. Su potencia se mide en vatios (W).",
      partes: [
        {
          nombreParte: "Conectores ATX (24 Pines)",
          descripcion: "Los conectores ATX proporcionan la alimentación principal a la placa madre. Incluyen conectores de 20 o 24 pines, según el tipo de placa madre.",
          categoria: "Conectores"
        },
        {
          nombreParte: "Conectores PCI",
          descripcion: "Los conectores PCI suministran energía adicional a tarjetas de expansión como la GPU. Algunos modelos requieren conectores de 6 u 8 pines.",
          categoria: "Conectores"
        },
        {
          nombreParte: "Ventilador de Refrigeración",
          descripcion: "El ventilador de refrigeración mantiene la fuente de poder refrigerada, evitando el sobrecalentamiento. Algunos modelos incluyen ventiladores silenciosos o sin ventilador (fanless).",
          categoria: "Componentes de Soporte"
        },
        {
          nombreParte: "Transformador",
          descripcion: "Convierte la corriente alterna (CA) en corriente continua (CC) a diferentes voltajes. Asegura que cada componente reciba el voltaje adecuado.",
          categoria: "Chips"
        },
        {
          nombreParte: "Protecciones contra Sobrecarga",
          descripcion: "Incluye circuitos de protección para evitar daños por sobrecarga, sobrevoltaje o cortocircuitos, protegiendo los componentes conectados.",
          categoria: "Componentes de Soporte"
        },
        {
          nombreParte: "Modularidad",
          descripcion: "Algunas fuentes de poder son modulares, lo que permite conectar solo los cables necesarios para un mejor manejo de cables y flujo de aire.",
          categoria: "Configuración"
        }
      ]
    }

  ];
  