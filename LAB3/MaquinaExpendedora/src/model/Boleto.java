package model;

import java.util.Date;
import model.MaquinaExpendora;

public class Boleto {

	private float id;
	private float precio;
	private Date dia;
	
	public Boleto(float precio)
	{
		id = (float) (Math.random()*1000);
		this.precio = precio;
		dia = null;
	}
	
	public float mostrarID()
	{
		return id;
	}
}
