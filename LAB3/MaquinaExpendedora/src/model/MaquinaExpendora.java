package model;

import java.util.Date;
import model.Boleto;

/*
 * Nuestras máquinas trabajan con clientes que introducen dinero en ella 
 * y luego le solicitan que imprima un boleto. 
 * La máquina mantiene un registro de la cantidad de dinero 
 * que ha recaudado durante todo su funcionamiento. 
 * En la vida real, es frecuente que la máquina expendedora de boletos ofrezca
 *  un conjunto de boletos de diferentes tipos y los clientes escogen entre ellos, 
 *  sólo el que desean. Nuestra máquina simplificada imprime sólo boletos de un único
 *   precio. Resulta significativamente más complicado programar 
 *   una clase que sea capaz de emitir boletos de diferentes valores 
 *   que si tienen un único precio. Por otra parte, con programación 
 *   orientada a objetos es muy fácil crear varias instancias de la clase, 
 *   cada una con su propio precio, para cumplir con la necesidad de diferentes 
 *   tipos de boletos.
 */
 
 
/*
 * Precio de Boleto
Número de serie
Saldo (lo que lleva ganado?)
Cantidad de boletos impresos!
Stock inicial de boletos
Fecha de último retiro
 
 */
 


public class MaquinaExpendora {
	
	private float precioBoleto;
	private int numeroDeSerie;
	private float saldoActual;
	private int cantBoletosImpresos;
	private int stockActual;
	private Date fechaUltimoRetiro;
	private boolean estado;
	private Boleto boleto;
	
	
	public MaquinaExpendora(int precioBoleto)
	{
		numeroDeSerie = (int)Math.random()*1000 + 1;
		this.precioBoleto = precioBoleto;
		saldoActual = 0;
		cantBoletosImpresos = 0;
		stockActual = 1000;
		fechaUltimoRetiro = null;
		estado = false;
	}
	
	
	public void encender()
	{
		estado = true;
	}
	
	public void apagar()
	{
		estado = false;
	}
	
	public String mostrarPrecio()
	{
		if(estado == true)
		{
			return "$ " + precioBoleto;
		}
		
		return null;
	}
	
	public void modificarPrecio(float nuevoPrecio)
	{
		if(estado && nuevoPrecio > 0) precioBoleto = nuevoPrecio;
	}
	
	public float mostrarSaldo()
	{
		if(estado)
		{
			return saldoActual;
		}
		
		return -1;
	}
	
	public int mostrarStock()
	{
		if(estado) return stockActual;
		
		return -1;		
	}
	
	public void reiniciarStock(int nuevoStock)
	{
		if(estado) stockActual = nuevoStock;
	}
	
	public String retirarDinero()
	{
		if(estado)
		{
			float aux = saldoActual;
			saldoActual = 0;
			return "El saldo retirado es $ " + aux;
		} 		
		
		return null;
	}
	
	public int mostrarBoletosI()
	{
		if(estado == true) return cantBoletosImpresos;
		
		return -1;
	}
	
	public MaquinaExpendora reiniciarMaquina(MaquinaExpendora m1)
	{
		m1.cantBoletosImpresos = 0;
		m1.estado = false;
		m1.fechaUltimoRetiro = null;
		m1.numeroDeSerie = 0;
		m1.precioBoleto = 0;
		m1.saldoActual = 0;
		m1.stockActual = 0;
		
		return m1;
	}

	public String emitirBoleto()
	{
		boleto = new Boleto(precioBoleto);
		stockActual--;
		saldoActual += precioBoleto;
		cantBoletosImpresos++;
		
		return "Id = " + boleto.mostrarID() + "\n" +
			   "Precio = " + precioBoleto ;
		
	}
}






